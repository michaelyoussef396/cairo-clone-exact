import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '../src/assets');

// Images that need aggressive compression (> 1MB)
const largeImages = [
  'happy-guests.webp',
  'bar-drinks.webp',
  'restaurant-interior.webp',
  'beverages.webp'
];

console.log('Aggressively compressing large images...\n');

async function compressImage(filename) {
  const filePath = path.join(assetsDir, filename);

  try {
    const stats = fs.statSync(filePath);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);

    console.log(`Compressing: ${filename} (${sizeMB}MB)...`);

    // Resize to max 1920px width and compress with quality 70
    const tempPath = filePath + '.tmp';

    await sharp(filePath)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 70, effort: 6 })
      .toFile(tempPath);

    // Replace original with compressed version
    fs.unlinkSync(filePath);
    fs.renameSync(tempPath, filePath);

    const newStats = fs.statSync(filePath);
    const newSizeMB = (newStats.size / 1024 / 1024).toFixed(2);
    const savings = ((stats.size - newStats.size) / stats.size * 100).toFixed(1);

    console.log(`✓ Compressed: ${filename} → ${newSizeMB}MB (${savings}% reduction)\n`);
  } catch (error) {
    console.error(`✗ Error compressing ${filename}:`, error.message);
  }
}

async function compressAll() {
  for (const file of largeImages) {
    await compressImage(file);
  }
  console.log('✅ All large images compressed!');
}

compressAll();
