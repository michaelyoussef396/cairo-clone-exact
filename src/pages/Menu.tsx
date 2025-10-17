import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { parseCSV, groupByCategory, categoryOrder, categoryDisplayNames, MenuItem } from '@/utils/csvParser';
import menuCSV from '@/data/menu.csv?raw';

const Menu = () => {
  const [menuItems, setMenuItems] = useState<Record<string, MenuItem[]>>({});
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Entree');

  useEffect(() => {
    const loadMenuData = () => {
      try {
        const items = parseCSV(menuCSV);
        const groupedItems = groupByCategory(items);
        setMenuItems(groupedItems);
        setLoading(false);
      } catch (error) {
        console.error('Error loading menu data:', error);
        setLoading(false);
      }
    };

    loadMenuData();
  }, []);

  const availableCategories = categoryOrder.filter(category => menuItems[category]?.length > 0);

  // Generate Menu Schema for SEO
  const menuSections = availableCategories.map(category => ({
    "@type": "MenuSection",
    "name": categoryDisplayNames[category] || category,
    "hasMenuItem": menuItems[category]?.map(item => {
      const priceValue = item.price ? parseFloat(item.price.replace('$', '')) : null;
      return {
        "@type": "MenuItem",
        "name": item.title.replace(/\$\d+\s*/, '').trim(),
        "description": item.shortDescription,
        "image": item.image,
        ...(priceValue && {
          "offers": {
            "@type": "Offer",
            "price": priceValue,
            "priceCurrency": "AUD"
          }
        })
      };
    }) || []
  }));

  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Cairo By Nights Menu",
    "description": "Authentic Egyptian and Middle Eastern cuisine featuring traditional dishes, grills, desserts, and premium beverages",
    "inLanguage": "en-AU",
    "hasMenuSection": menuSections
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading our delicious menu...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(menuSchema)}
        </script>
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary/20 via-background to-secondary/20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 egyptian-gold">
            Cairo Nights Menu - Authentic Egyptian Cuisine
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Discover the authentic flavors of Egypt with our carefully crafted dishes,
            blending traditional recipes with modern culinary artistry
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            {/* Category Navigation */}
            <div className="mb-12">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 h-auto p-2 bg-card/50 backdrop-blur-sm">
                {availableCategories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="text-sm font-medium px-4 py-3 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                  >
                    {categoryDisplayNames[category] || category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Menu Items */}
            {availableCategories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="mb-8">
                  <h2 className="text-4xl font-bold text-center mb-4 egyptian-gold">
                    {categoryDisplayNames[category] || category}
                  </h2>
                  <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {menuItems[category]?.map((item) => (
                    <Card
                      key={item.slug}
                      className="group overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover:scale-105 transition-all duration-300 hover:shadow-gold"
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder.svg';
                          }}
                        />
                        {item.price && (
                          <Badge className="absolute top-4 right-4 bg-primary/90 text-primary-foreground font-bold text-lg px-3 py-1">
                            {item.price}
                          </Badge>
                        )}
                      </div>
                      
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                          {item.title.replace(/\$\d+\s*/, '')}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.shortDescription}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {(!menuItems[category] || menuItems[category].length === 0) && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">
                      No items available in this category.
                    </p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;