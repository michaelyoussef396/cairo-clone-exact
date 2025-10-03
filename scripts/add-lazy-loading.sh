#!/bin/bash

# Add loading="lazy" to all img tags that don't have it (except in HeroSection.tsx which we already handled)
# This targets below-the-fold images

echo "Adding lazy loading to below-the-fold images..."

# Find all TSX files except HeroSection
find /Users/michaelyoussef/sole-media/cairo-clone-exact/src -name "*.tsx" ! -name "HeroSection.tsx" -type f | while read file; do
  # Check if file has img tags without loading attribute
  if grep -q '<img' "$file" && grep -q -v 'loading=' "$file"; then
    # Add loading="lazy" to img tags that don't have it
    # Match <img tags and add loading="lazy" before the closing />
    sed -i '' 's/<img\([^>]*\)\([^/]\)>/<img\1\2 loading="lazy">/g' "$file"
    sed -i '' 's/<img\([^>]*\)\([^/]\)\/>/<img\1\2 loading="lazy" \/>/g' "$file"
    echo "✓ Updated: $file"
  fi
done

echo "✅ Lazy loading added to all below-the-fold images!"
