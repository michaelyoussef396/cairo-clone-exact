export interface MenuItem {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  foodCategory: string;
  shortDescription: string;
  price: string;
}

export const parseCSV = (csvText: string): MenuItem[] => {
  const lines = csvText.split('\n');
  const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim());
  
  return lines.slice(1)
    .filter(line => line.trim())
    .map(line => {
      // Handle CSV parsing with potential commas in quotes
      const values: string[] = [];
      let current = '';
      let inQuotes = false;
      
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          values.push(current.trim());
          current = '';
        } else {
          current += char;
        }
      }
      values.push(current.trim());
      
      // Extract price from title
      const title = values[1]?.replace(/"/g, '') || '';
      const priceMatch = title.match(/\$\d+/);
      const price = priceMatch ? priceMatch[0] : '';
      
      return {
        slug: values[0]?.replace(/"/g, '') || '',
        title: title,
        image: values[2]?.replace(/"/g, '') || '',
        imageAlt: values[3]?.replace(/"/g, '') || '',
        foodCategory: values[4]?.replace(/"/g, '') || '',
        shortDescription: values[5]?.replace(/"/g, '') || '',
        price
      };
    })
    .filter(item => item.slug && item.title);
};

export const groupByCategory = (items: MenuItem[]): Record<string, MenuItem[]> => {
  return items.reduce((acc, item) => {
    const category = item.foodCategory || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);
};

// Category display order and names
export const categoryOrder = [
  'Entree',
  'mains', 
  'Grill',
  'Tagen',
  'salads',
  'Dips',
  'Sides',
  'kids',
  'Desserts',
  'Mocktails',
  'Specialty Cocktails',
  'Cocktails',
  'Wines',
  'Beers & Ciders',
  'Hot Drinks',
  'Tea',
  'Cold Drinks'
];

export const categoryDisplayNames: Record<string, string> = {
  'Entree': 'Entrees',
  'mains': 'Main Dishes', 
  'Grill': 'Grill Selection',
  'Tagen': 'Traditional Tagen',
  'salads': 'Fresh Salads',
  'Dips': 'Dips & Spreads',
  'Sides': 'Side Dishes',
  'kids': 'Kids Menu',
  'Desserts': 'Sweet Endings',
  'Mocktails': 'Refreshing Mocktails',
  'Specialty Cocktails': 'Signature Cocktails',
  'Cocktails': 'Cocktails',
  'Wines': 'Fine Wines',
  'Beers & Ciders': 'Beers & Ciders',
  'Hot Drinks': 'Hot Beverages',
  'Tea': 'Traditional Teas',
  'Cold Drinks': 'Cool Refreshments'
};