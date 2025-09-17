import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const NewMenu = () => {
  const banquetPackages = [
    {
      price: "$55",
      title: "Essential Experience",
      description: "Perfect for intimate gatherings",
      features: [
        "Selection of Mixed Dips for the Table",
        "Entree: Chicken Wings & Salads",
        "Main: Mix Grill",
        "Vegans/vegetarians get Koshari"
      ]
    },
    {
      price: "$60",
      title: "Classic Celebration",
      description: "Our most popular banquet option",
      features: [
        "Selection of Mixed Dips for the Table",
        "Entree: Chicken Wings, Lamb Sambousek & Salad",
        "Main: Mix Grill",
        "Dessert: Selection of Baklava",
        "Vegans/vegetarians get Koshari"
      ]
    },
    {
      price: "$70",
      title: "Premium Feast",
      description: "An elevated dining experience",
      features: [
        "Selection of Mixed Dips for the Table",
        "Entree: Chicken Wings, Cheese Sambousek, Salad, Fried Calamari & Kobeba",
        "Main: Mix Grill & Samakmak",
        "Dessert: Om Ali",
        "Vegans/vegetarians get Koshari"
      ]
    },
    {
      price: "$80",
      title: "Royal Experience",
      description: "The ultimate Egyptian feast",
      features: [
        "Selection of Mixed Dips for the Table",
        "Entree: Chicken Wings, Sambousek & Salad",
        "Main: Grilled Seafood, Mix Grill & Macarona Bechamel",
        "Dessert: Selection of Baklava & Om Ali",
        "Tea or Coffee included",
        "Vegans/vegetarians get Koshari"
      ]
    }
  ];

  const menuSections = {
    beverages: {
      title: "Beverages",
      coldDrinks: [
        { name: "Premium Juice: Mango or Guava", price: "$10" },
        { name: "Milkshakes: Strawberry, Caramel, Chocolate", price: "$10" },
        { name: "Iced Coffee, Iced Bull Bitters, Lemon Lime", price: "$8" },
        { name: "Orange Juice, Pineapple Juice", price: "$8" },
        { name: "Aswan Hibiscus Cold Tea (Karkadeh) / Peach Ice Tea", price: "$6" },
        { name: "Coke, Coke Zero, Lemonade, Fanta, Raspberry", price: "$6" }
      ],
      hotDrinks: [
        { name: "Egyptian Sahlab (sweet drink)", price: "$8" },
        { name: "Chocolate Hot Latte", price: "$7" },
        { name: "Chai Dirty Latte, Chai", price: "$7" },
        { name: "Espresso", price: "$5" },
        { name: "Cappuccino, Latte, White Flat", price: "$5" },
        { name: "Mocaccino Black, Long Tea", price: "$5" },
        { name: "Cider Apple Hot", price: "$5" }
      ]
    },
    cocktails: [
      { name: "Cairo Summer", price: "$26", description: "Chambord, Vodka, Strawberry Schnapps & Strawberries" },
      { name: "Cleopatra's Kiss", price: "$26", description: "Malibu, Strawberry liqueur, Passion Fruit liqueur & Tropical Juice" },
      { name: "Pharaoh's Poison", price: "$26", description: "Spiced Rum, Malibu, Cointreau & Blue Curacao" },
      { name: "Toblerone", price: "$24", description: "Baileys, Frangelico & Kahlua with ice cream" },
      { name: "Pina Colada", price: "$22", description: "Malibu, Pina Colada mix & pineapple juice" },
      { name: "Espresso Martini", price: "$22", description: "Vodka, Kahlua, Frangelico & fresh espresso shot" }
    ],
    dips: [
      { name: "3 Dips Selection", price: "$27" },
      { name: "Cheese Dip - Feta with olives & spices", price: "$12" },
      { name: "Garlic Dip (Vegan) - Crushed garlic puree with oil & lemon", price: "$12" },
      { name: "Tzatziki - Yoghurt with cucumber & mint", price: "$12" },
      { name: "Hummus (Vegan) - Chickpeas puree with tahini & olive oil", price: "$12" },
      { name: "Babaganoush (Vegan) - Grilled eggplant, tahini & garlic", price: "$12" },
      { name: "Tahini (Vegan) - Sesame seed butter, vinegar, garlic, lemon & parsley", price: "$12" }
    ],
    entrees: [
      { name: "Kebda Iskandarani", price: "$24", description: "Veal liver marinated & pan tossed with chilli, garlic & Chef Tharwat's special spices" },
      { name: "Waraq Enab", price: "$24", description: "Vine leaves stuffed with rice, herbs & beef-mince" },
      { name: "Hawawshi", price: "$24", description: "Spiced ground beef cooked in oven in flat baladi bread with onions, capsicum & chilli" },
      { name: "Calamari", price: "$24", description: "Tender and crispy fried calamari, served with aioli" },
      { name: "Moumbar (GF)", price: "$19", description: "3 pieces of sausage skin stuffed with special spicy rice, tomato, onions & herbs" },
      { name: "Kawareh Soup", price: "$19", description: "Traditional slow-cooked soup of buffalo trotters served with home made bread" }
    ],
    claypots: [
      { name: "Sayadia Tagen (Seafood)", price: "$40", description: "Barramundi fish fillet, calamari, prawn, tomato puree & capsicum baked in Egyptian claypot" },
      { name: "Akawi Tagen", price: "$38", description: "Ox tail slow cooked in Egyptian claypot with potatoes, onions & spices with plain rice" },
      { name: "Sayadia Tagen (Fish)", price: "$34", description: "Barramundi fish fillet baked with spicy tomato & capsicum sauce in Egyptian claypot" },
      { name: "Moammar Prawn Tagen (GF)", price: "$32", description: "Rice cooked in Egyptian claypot with prawn, garlic, onions & cream" },
      { name: "Moammar Roz Lamb Tagen (GF)", price: "$31", description: "Rice cooked in Egyptian claypot with lamb fillet pieces, onions & cream" }
    ],
    grills: [
      { name: "Cairo King Grill (For 2)", price: "$99", description: "Selection of dips, 2 Lamb Kebabs, 2 Kofta Skewers, 2 Chicken Kebabs, 2 Wings, 1 Quail with Cairo rice" },
      { name: "Grill Mix (GF)", price: "$42", description: "1 lamb kofta, 1 lamb kebab, 1 chicken kebab with garlic & hummus dip, Cairo rice & Salata Baladi" },
      { name: "Cutlets Lamb", price: "$39", description: "Grilled lamb cutlets served with vegetables, thyme sauce & chips" },
      { name: "BBQ Quails (GF)", price: "$36", description: "2 large quails marinated & grilled with Cairo rice, Salata Baladi & garlic dip" },
      { name: "Shish Lamb Kebab (GF)", price: "$34", description: "2 marinated lamb tenderloin with Cairo rice, hummus dip & Salata Baladi" }
    ],
    desserts: [
      { name: "Om Ali (MUST TRY)", price: "$16-$36", description: "Traditional Egyptian croissant pudding with Hazelnuts, Sultanas & coconut shreds - 4 sizes available" },
      { name: "Mango Konafa", price: "$16", description: "Angel hair pastry with mango pieces, cream & ice cream" },
      { name: "Mango with Laban bel Roz", price: "$14", description: "Traditional sweet rice pudding with mango" },
      { name: "Laban bel Roz", price: "$12", description: "Traditional sweet rice pudding topped with pistachio, cinnamon & sultanas" },
      { name: "Middle Eastern Sweets", price: "$4-$11", description: "Variety of Middle Eastern sweets & Baklava" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary/20 via-background to-secondary/20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 egyptian-gold">
            Cairo Nights Menu
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
            Discover the authentic flavors of Egypt with our carefully crafted dishes, 
            blending traditional recipes with modern culinary artistry by Chef Tharwat Bestawros
          </p>
          <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-lg font-medium">
              Led by Melbourne's only 5-star Egyptian Chef with decades of experience 
              in Egypt and Australia's most prestigious hotels
            </p>
          </div>
        </div>
      </section>

      {/* Banquet Packages Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 egyptian-gold">
              Sharing Banquet Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Perfect for groups and special occasions - experience the best of Egyptian cuisine
            </p>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {banquetPackages.map((pkg, index) => (
              <Card key={index} className="relative overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover:scale-105 transition-all duration-300 hover:shadow-gold">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                  <CardTitle className="text-xl egyptian-gold">{pkg.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                  <div className="text-sm text-muted-foreground font-medium">Per Person</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 egyptian-gold">
              Our Menu
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full"></div>
          </div>

          <div className="space-y-16">
            {/* Beverages */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center egyptian-gold">Beverages</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Cold Drinks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {menuSections.beverages.coldDrinks.map((drink, index) => (
                        <div key={index} className="flex justify-between items-start">
                          <span className="flex-1">{drink.name}</span>
                          <Badge variant="outline" className="ml-4">{drink.price}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Hot Drinks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {menuSections.beverages.hotDrinks.map((drink, index) => (
                        <div key={index} className="flex justify-between items-start">
                          <span className="flex-1">{drink.name}</span>
                          <Badge variant="outline" className="ml-4">{drink.price}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator className="my-12" />

            {/* Cocktails */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center egyptian-gold">Cairo Specialty Cocktails</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuSections.cocktails.map((cocktail, index) => (
                  <Card key={index} className="bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-lg">{cocktail.name}</h4>
                        <Badge className="bg-primary/10 text-primary">{cocktail.price}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{cocktail.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Separator className="my-12" />

            {/* Dips */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center egyptian-gold">Dips & Appetizers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuSections.dips.map((dip, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-card/50 rounded-lg">
                    <span className="font-medium">{dip.name}</span>
                    <Badge variant="outline">{dip.price}</Badge>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="my-12" />

            {/* Entrees */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center egyptian-gold">Entrees</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuSections.entrees.map((entree, index) => (
                  <Card key={index} className="bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-lg">{entree.name}</h4>
                        <Badge className="bg-primary/10 text-primary">{entree.price}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{entree.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Separator className="my-12" />

            {/* Egyptian Claypots */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center egyptian-gold">Egyptian Claypots (Tagen)</h3>
              <div className="mb-6 text-center max-w-4xl mx-auto">
                <p className="text-muted-foreground italic">
                  Cooking in an authentic Egyptian claypot is traced back to the time of The Pharaohs. 
                  Many North African cuisines followed suit as The Pharaohs led the way in agriculture & food.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuSections.claypots.map((dish, index) => (
                  <Card key={index} className="bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-lg">{dish.name}</h4>
                        <Badge className="bg-primary/10 text-primary">{dish.price}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{dish.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Separator className="my-12" />

            {/* From the Grill */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center egyptian-gold">From the Grill</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuSections.grills.map((grill, index) => (
                  <Card key={index} className="bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-lg">{grill.name}</h4>
                        <Badge className="bg-primary/10 text-primary">{grill.price}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{grill.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Separator className="my-12" />

            {/* Desserts */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center egyptian-gold">Desserts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuSections.desserts.map((dessert, index) => (
                  <Card key={index} className="bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-lg">{dessert.name}</h4>
                        <Badge className="bg-primary/10 text-primary">{dessert.price}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{dessert.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 egyptian-gold">Ready to Experience Egypt?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your table today and embark on a culinary journey through the flavors of Cairo
          </p>
          <Button size="lg" className="egyptian-button">
            Make a Reservation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewMenu;