import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  'restaurant-interior.webp',
  'egyptian-dishes.webp',
  'belly-dancer.webp',
  'happy-guests.webp',
  'bar-drinks.webp',
  'main-dish-2.webp'
];

const inputDir = path.join(__dirname, '../src/assets');
const outputDir = path.join(__dirname, '../src/assets/optimized');

// Create output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function compressImages() {
  console.log('🖼️  Compressing hero images for optimal LCP performance...\n');

  for (const image of images) {
    const inputPath = path.join(inputDir, image);
    const outputPath = path.join(outputDir, image);

    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  ${image}: Not found, skipping...`);
      continue;
    }

    try {
      await sharp(inputPath)
        .resize(1280, 720, {
          fit: 'cover',
          withoutEnlargement: true
        })
        .webp({
          quality: 72,
          effort: 6
        })
        .toFile(outputPath);

      const inputStats = fs.statSync(inputPath);
      const outputStats = fs.statSync(outputPath);
      const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

      console.log(`✓ ${image}:`);
      console.log(`  Before: ${(inputStats.size / 1024).toFixed(0)} KB`);
      console.log(`  After:  ${(outputStats.size / 1024).toFixed(0)} KB`);
      console.log(`  Saved:  ${reduction}% reduction\n`);
    } catch (error) {
      console.error(`✗ ${image}: ${error.message}\n`);
    }
  }

  console.log('✅ Compression complete!');
  console.log('\nNext steps:');
  console.log('1. Review compressed images in /src/assets/optimized/');
  console.log('2. Backup originals: mv src/assets src/assets-backup');
  console.log('3. Replace with optimized: mv src/assets/optimized src/assets');
}

compressImages().catch(console.error);
