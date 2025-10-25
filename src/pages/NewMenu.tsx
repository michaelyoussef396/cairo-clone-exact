import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { parseCSV, groupByCategory, categoryOrder, categoryDisplayNames, MenuItem } from '@/utils/csvParser';
import menuCSV from '@/data/menu.csv?raw';

const NewMenu = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [groupedItems, setGroupedItems] = useState<Record<string, MenuItem[]>>({});
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string | 'all'>('all');

  useEffect(() => {
    const loadMenu = () => {
      try {
        const items = parseCSV(menuCSV);
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

  const categoryButtons = [
    { key: 'Entree', display: 'Entrees' },
    { key: 'mains', display: 'Main Dishes' },
    { key: 'Grill', display: 'Grill Selection' },
    { key: 'Tagen', display: 'Traditional Tagen' },
    { key: 'salads', display: 'Fresh Salads' },
    { key: 'Dips', display: 'Dips' },
    { key: 'kids', display: 'Kids Menu' },
    { key: 'Desserts', display: 'Sweet Endings' },
    { key: 'Mocktails', display: 'Refreshing Mocktails' },
    { key: 'Specialty Cocktails', display: 'Signature Cocktails' },
    { key: 'Cocktails', display: 'Cocktails' },
    { key: 'Wines', display: 'Fine Wines' },
    { key: 'Beers & Ciders', display: 'Beers & Ciders' },
    { key: 'Hot Drinks', display: 'Hot Beverages' },
    { key: 'Tea', display: 'Teas' },
    { key: 'Cold Drinks', display: 'Cool Refreshments' }
  ];

  const getFilteredCategories = () => {
    if (activeCategory === 'all') {
      return categoryOrder;
    }
    return categoryOrder.filter(cat => cat === activeCategory);
  };

  const banquetOptions = [
    {
      price: "$55",
      perPerson: "per person",
      items: [
        { label: "Selection of Mixed Dips for the Table" },
        { label: "Entree", value: "Chicken Wing & Salad" },
        { label: "Main", value: "Mix Grill" },
        { label: "(Vegans/vegetarians get their own Koshari)" }
      ]
    },
    {
      price: "$60",
      perPerson: "per person",
      items: [
        { label: "Selection of Mixed Dips for the Table" },
        { label: "Entree", value: "Chicken Wings, Lamb Sambousek & Salad" },
        { label: "Main", value: "Mix Grill" },
        { label: "Dessert", value: "Selection of Baklava" },
        { label: "(Vegans/vegetarians get their own Koshari)" }
      ]
    },
    {
      price: "$70",
      perPerson: "per person",
      items: [
        { label: "Selection of Mixed Dips for the Table" },
        { label: "Entree", value: "Chicken Wings, Cheese Sambousek, Salad, Fried Calamari & Kobeba for Table" },
        { label: "Main", value: "Mix Grill" },
        { label: "", value: "Samakmak" },
        { label: "Dessert", value: "Om Ali" },
        { label: "(Vegans/vegetarians get their own Koshari)" }
      ]
    },
    {
      price: "$80",
      perPerson: "per person",
      items: [
        { label: "Selection of Mixed Dips for the Table" },
        { label: "Entree", value: "Chicken Wings, Sambousek & Salad" },
        { label: "Main", value: "Grilled Seafood" },
        { label: "", value: "Mix Grill" },
        { label: "", value: "Macarona Bechamel" },
        { label: "Dessert", value: "Selection of Baklava" },
        { label: "", value: "Om Ali" },
        { label: "", value: "Tea or Coffee" },
        { label: "(Vegans/vegetarians get their own Koshari)" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <SEO
        title="Egyptian Menu Melbourne | Traditional Halal | Cairo By Nights"
        description="Traditional Egyptian food menu: Kofta, tagen lamb roz moammar, koshari, molokhia. Halal certified. Dine-in Carlton Melbourne. View full menu!"
        canonical="https://www.caironightsrestaurant.com.au/menu"
      />
      <Header />
      <Breadcrumbs />

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

      {/* Egyptian Culinary Traditions */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Egyptian Culinary Traditions
              </h2>
              <p className="text-lg text-muted-foreground">
                Centuries of Authentic Flavors Passed Through Generations
              </p>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Cairo By Nights, we honor the rich culinary heritage of Egypt by using traditional cooking techniques that have been perfected over generations. Our chefs bring authentic expertise from Cairo, where they mastered the art of Egyptian cuisine in family kitchens and renowned restaurants. Every dish on our menu tells the story of Egypt's diverse culinary landscape, from the bustling street food markets of Cairo to the refined dining traditions of Alexandria.
              </p>

              <p>
                Egyptian cooking is characterized by its careful balance of aromatic spices, slow-cooking methods, and the art of layering flavors. Our kitchen takes pride in maintaining complete halal certification while sourcing only the highest quality ingredients. We import authentic Egyptian spices—including our signature seven-spice blend for kofta and the rare molokhia leaves—to ensure every dish captures the true essence of Egyptian flavors that locals in Melbourne crave and newcomers discover with delight.
              </p>

              <p>
                Traditional Egyptian cooking techniques shine throughout our menu. Our tagens slow-cook for hours in authentic clay pots, allowing lamb or chicken to achieve perfect tenderness while absorbing the complex flavors of apricots, prunes, and traditional spice combinations. Our charcoal grill masters the ancient art of Egyptian grilling, creating the distinctive smoky flavor in our kofta, lamb chops, and mixed grill platters that define authentic Egyptian barbecue.
              </p>

              <p>
                The cultural significance of Egyptian communal dining is woven into every aspect of our menu. In Egyptian tradition, meals are shared experiences where family and friends gather around abundant spreads of mezze, grilled meats, and aromatic rice dishes. Our banquet packages ($55-$75pp) embrace this philosophy, designed for groups to experience the joy of Egyptian hospitality through generous portions meant for sharing, conversation, and celebration—just as it has been done in Cairo for centuries.
              </p>
            </div>
          </div>
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
            <Card className="text-center bg-muted/10">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-foreground mb-2">{Object.keys(groupedItems).length}</div>
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
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 egyptian-gold">
              Banquet Packages
            </h2>
            <div className="w-32 h-1 bg-gradient-gold mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Perfect for groups and special occasions. Minimum 8 people. 48-hour advance booking required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {banquetOptions.map((option, index) => (
              <div 
                key={index} 
                className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-gold opacity-10 rounded-bl-full"></div>
                
                <div className="text-center mb-6 md:mb-8 relative z-10">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold egyptian-gold mb-1 group-hover:scale-110 transition-transform duration-300">
                    {option.price}
                  </div>
                  <p className="text-muted-foreground font-medium text-sm md:text-base">{option.perPerson}</p>
                </div>
                
                <div className="space-y-3 md:space-y-4">
                  {option.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="p-2 rounded-lg hover:bg-primary/5 transition-colors duration-300"
                    >
                      {item.label && !item.value && (
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                          {item.label}
                        </p>
                      )}
                      {item.label && item.value && (
                        <div>
                          <p className="font-semibold text-primary text-sm md:text-base mb-1">{item.label}:</p>
                          <p className="text-muted-foreground leading-relaxed text-sm md:text-base pl-2">{item.value}</p>
                        </div>
                      )}
                      {!item.label && item.value && (
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base pl-2">{item.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-muted-foreground">
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="text-4xl mb-4 text-center">🎉</div>
              <h3 className="text-xl font-playfair font-semibold mb-4 text-primary text-center">Perfect for Every Occasion</h3>
              <p className="leading-relaxed">
                Our banquet packages are ideal for birthday celebrations, corporate dinners, engagement parties, family reunions, and any special gathering. Each tier offers generous portions designed in the Egyptian tradition of communal feasting.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="text-4xl mb-4 text-center">🎭</div>
              <h3 className="text-xl font-playfair font-semibold mb-4 text-primary text-center">Customization & Entertainment</h3>
              <p className="leading-relaxed">
                We understand that every celebration is unique. Our banquet packages can be customized to accommodate dietary requirements. Enhance your event with our professional belly dancing performance available Friday-Sunday at 9 PM.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="text-4xl mb-4 text-center">🏺</div>
              <h3 className="text-xl font-playfair font-semibold mb-4 text-primary text-center">Egyptian Feast Tradition</h3>
              <p className="leading-relaxed">
                The Egyptian tradition of communal feasting dates back thousands of years. Our banquet service embraces this heritage, presenting dishes family-style to encourage sharing, conversation, and togetherness.
              </p>
            </div>

            <p className="text-muted-foreground mb-6">
              Planning a large group celebration? Our{" "}
              <Link to="/function-room" className="text-egyptian-gold hover:underline">
                private function room
              </Link>{" "}
              accommodates 20-60 guests with customized{" "}
              <Link to="/menu#banquet" className="text-egyptian-gold hover:underline">
                banquet menus
              </Link>{" "}
              and optional{" "}
              <Link to="/events" className="text-egyptian-gold hover:underline">
                entertainment packages
              </Link>.
            </p>
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

          {/* Category Navigation */}
          <div className="mb-16">
            {/* All Categories Button */}
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-8 py-4 rounded-lg font-medium transition-all duration-200 cursor-pointer text-center min-h-[44px] flex items-center justify-center border ${
                  activeCategory === 'all'
                    ? 'bg-[#D4AF37] text-[#1a1a1a] border-[#D4AF37]'
                    : 'bg-[#2a2a2a] text-[#e5e5e5] border-[rgba(212,175,55,0.3)] hover:bg-[rgba(212,175,55,0.15)] hover:border-[rgba(212,175,55,0.5)]'
                }`}
              >
                All Categories
              </button>
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-7xl mx-auto">
              {categoryButtons.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-6 py-4 rounded-lg font-medium transition-all duration-200 cursor-pointer text-center min-h-[44px] flex items-center justify-center border ${
                    activeCategory === cat.key
                      ? 'bg-[#D4AF37] text-[#1a1a1a] border-[#D4AF37]'
                      : 'bg-[#2a2a2a] text-[#e5e5e5] border-[rgba(212,175,55,0.3)] hover:bg-[rgba(212,175,55,0.15)] hover:border-[rgba(212,175,55,0.5)]'
                  }`}
                >
                  {cat.display}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-16 transition-opacity duration-300">
            {getFilteredCategories().map((category) => {
              const items = groupedItems[category];
              if (!items || items.length === 0) return null;

              return (
                <div key={category}>
                  <h3 className="text-3xl font-bold mb-8 text-center text-primary">
                    {categoryDisplayNames[category] || category}
                  </h3>
                  
                  <div className="space-y-8">
                    {items.map((item, index) => {
                      // Check if this is a subheading
                      if (item.shortDescription === 'SUBHEADING') {
                        return (
                          <div key={index} className="mt-8 mb-6">
                            <h4 className="text-2xl font-bold text-[#D4AF37] mb-6" style={{ marginTop: index > 0 ? '24px' : '0', marginBottom: '16px' }}>
                              {item.title}
                            </h4>
                          </div>
                        );
                      }
                      
                      // Regular menu item
                      return (
                        <Card key={index} className="bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-3">
                              <h4 className="font-bold text-lg text-foreground">{item.title.replace(/\$\d+\s*/, '')}</h4>
                              <Badge className="bg-primary/10 text-primary ml-2 flex-shrink-0">
                                {item.price || item.shortDescription || 'Price on request'}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                  
                  <Separator className="my-12" />
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Fresh Ingredients Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Fresh Ingredients, Authentic Flavors
              </h2>
              <p className="text-lg text-muted-foreground">
                Our Commitment to Quality and Authenticity
              </p>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Cairo By Nights, authenticity begins with sourcing the finest ingredients. We partner with trusted halal butchers across Melbourne to ensure our lamb, beef, and chicken meet both halal certification standards and our exacting quality requirements. Every cut of meat is carefully selected and prepared fresh daily in our Carlton kitchen, never frozen, to maintain the tenderness and flavor that Egyptian cuisine demands.
              </p>

              <p>
                Our spice cabinet tells the story of Egyptian flavors: We import authentic Egyptian seven-spice blend (baharat), rare molokhia leaves, premium cumin from the Nile Delta, and traditional za'atar from specialty Egyptian suppliers. These aren't generic substitutes—these are the exact spices used in Cairo's finest restaurants and Egyptian family kitchens. Our chefs understand that authentic Egyptian cuisine depends on these precise flavors, which is why we go to great lengths to source them directly.
              </p>

              <p>
                Each morning, our Carlton kitchen begins fresh preparation for the evening service. Our chefs handcraft every dish using traditional Egyptian cooking methods—slow-simmering tagens, hand-rolling grape leaves, charcoal-grilling kofta skewers, and preparing fresh pita bread. This dedication to daily preparation ensures that when you dine at Cairo By Nights, you're experiencing Egyptian cuisine as it's meant to be: fresh, flavorful, and made with the care and attention that generations of Egyptian cooks have brought to their craft.
              </p>
            </div>
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