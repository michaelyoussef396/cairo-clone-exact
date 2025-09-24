import React, { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { parseCSV, groupByCategory, categoryOrder, categoryDisplayNames, MenuItem } from '@/utils/csvParser';

const NewMenu = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [groupedItems, setGroupedItems] = useState<Record<string, MenuItem[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMenu = async () => {
      try {
        const response = await fetch('/src/data/menu.csv');
        const csvText = await response.text();
        const items = parseCSV(csvText);
        const grouped = groupByCategory(items);
        
        setMenuItems(items);
        setGroupedItems(grouped);
        setLoading(false);
        
        // Log validation data
        console.log('Total menu items loaded:', items.length);
        console.log('Items by category:', Object.keys(grouped).map(cat => ({
          category: cat,
          count: grouped[cat].length,
          items: grouped[cat].map(item => ({ name: item.title, price: item.price }))
        })));
      } catch (error) {
        console.error('Error loading menu:', error);
        setLoading(false);
      }
    };

    loadMenu();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
        <Header />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground">Loading menu...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const banquetOptions = [
    {
      title: "Package A",
      price: "$55 per person",
      description: "Selection of 3 dips, hummus, babaganoush, garlic dip, mixed grill (lamb kofta, chicken skewer), cairo rice, salad, dessert"
    },
    {
      title: "Package B", 
      price: "$65 per person",
      description: "Selection of 3 dips, mixed entrees (sambousek, chicken wings), mixed grill (lamb kofta, chicken skewer, lamb skewer), cairo rice, salad, dessert"
    },
    {
      title: "Package C",
      price: "$75 per person", 
      description: "Selection of 3 dips, mixed entrees, premium mixed grill (lamb cutlets, chicken skewer, lamb skewer, quail), cairo rice, salad, premium dessert"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Cairo By Nights Menu
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Authentic Egyptian cuisine crafted with love and tradition
          </p>
        </div>
      </section>

      {/* Menu Statistics */}
      <section className="section-padding bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center bg-primary/5">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{menuItems.length}</div>
                <div className="text-sm text-muted-foreground">Total Items</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-secondary/5">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-secondary mb-2">{Object.keys(groupedItems).length}</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-accent/5">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-accent mb-2">{groupedItems['Cocktails']?.length || 0}</div>
                <div className="text-sm text-muted-foreground">Cocktails</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-muted/10">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-foreground mb-2">{groupedItems['mains']?.length || 0}</div>
                <div className="text-sm text-muted-foreground">Main Dishes</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Banquet Options */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Banquet Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Perfect for groups and special occasions. All packages include bread, tea or coffee.
              Minimum 8 people. 48-hour advance booking required.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {banquetOptions.map((option, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">{option.title}</CardTitle>
                  <Badge variant="outline" className="mx-auto text-lg px-4 py-2">{option.price}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Our Complete Menu
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          <div className="space-y-16">
            {categoryOrder.map((category) => {
              const items = groupedItems[category];
              if (!items || items.length === 0) return null;

              return (
                <div key={category}>
                  <h3 className="text-3xl font-bold mb-8 text-center text-primary">
                    {categoryDisplayNames[category] || category}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                      <Card key={index} className="bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="font-bold text-lg text-foreground">{item.title.replace(/\$\d+\s*/, '')}</h4>
                            <Badge className="bg-primary/10 text-primary ml-2 flex-shrink-0">
                              {item.price || 'Price on request'}
                            </Badge>
                          </div>
                          {item.shortDescription && (
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {item.shortDescription}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <Separator className="my-12" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Ready to Experience Egypt?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your table today and embark on a culinary journey through the flavors of Cairo
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Make a Reservation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewMenu;