import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '../src/assets');
const outputDir = path.join(__dirname, '../src/assets');

// Get all image files
const imageFiles = fs.readdirSync(assetsDir)
  .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
  .filter(file => !file.includes('logo')); // Keep logos as PNG for transparency

console.log(`Found ${imageFiles.length} images to optimize...\n`);

async function optimizeImage(filename) {
  const inputPath = path.join(assetsDir, filename);
  const outputFilename = filename.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const outputPath = path.join(outputDir, outputFilename);

  try {
    const stats = fs.statSync(inputPath);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);

    console.log(`Processing: ${filename} (${sizeMB}MB)...`);

    // Convert to WebP with quality 85
    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);

    const newStats = fs.statSync(outputPath);
    const newSizeMB = (newStats.size / 1024 / 1024).toFixed(2);
    const savings = ((stats.size - newStats.size) / stats.size * 100).toFixed(1);

    console.log(`✓ Created: ${outputFilename} (${newSizeMB}MB) - ${savings}% smaller\n`);
  } catch (error) {
    console.error(`✗ Error processing ${filename}:`, error.message);
  }
}

async function optimizeAll() {
  for (const file of imageFiles) {
    await optimizeImage(file);
  }
  console.log('✅ All images optimized!');
}

optimizeAll();
