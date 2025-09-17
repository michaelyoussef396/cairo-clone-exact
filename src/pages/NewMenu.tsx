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
      ],
      teaPots: [
        { name: "Egyptian Tea", price: "$5 p.p." },
        { name: "Mint, Black, Spearmint, Peppermint, Camomile, Green", price: "$5 p.p." }
      ],
      flavouredTeas: [
        { name: "Chamomile, Honey & Vanilla", price: "$6" },
        { name: "Blueberry & Blackcurrant", price: "$6" },
        { name: "Strawberry, Loganberry & Raspberry", price: "$6" },
        { name: "Orange & Cinnamon", price: "$6" },
        { name: "Lemon Twist", price: "$6" },
        { name: "Cranberry & Pomegranate", price: "$6" },
        { name: "Mango & Strawberry", price: "$6" },
        { name: "Green Tea With Jasmine", price: "$6" }
      ],
      arabicCoffee: [
        { name: "Arabic Coffee Kit (DIY)", price: "$5 p.p." }
      ]
    },
    wines: {
      beersAndCiders: [
        { name: "Corona, Stella, Crown Lager, Asahi, Peroni", price: "$13" },
        { name: "Rekorderlig Premium Swedish Cider 330ml", price: "$14" }
      ],
      sparkling: [
        { name: "Prosecco Bella Ciao", glass: "$14", bottle: "$39" },
        { name: "Jacob's Trilogy Creek", glass: "$13", bottle: "$35" }
      ],
      whiteWine: [
        { name: "Squealing Pig Sauvignon Blanc", glass: "$14", bottle: "$48" },
        { name: "Tread Softly Pinot Grigio", glass: "$13", bottle: "$46" },
        { name: "St Huberts The Stag Chardonnay", glass: "$13", bottle: "$44" },
        { name: "Zonin Moscato Veneto", glass: "$12", bottle: "$42" },
        { name: "Brown Brothers Moscato", glass: "$11", bottle: "$34" }
      ],
      roseWine: [
        { name: "LYV Languedoc - France", glass: "$14", bottle: "$48" },
        { name: "Saint Louis de Provence Estadon Rosé", glass: "$14", bottle: "$46" }
      ],
      redWine: [
        { name: "Pepperjack Barossa Shiraz", glass: "$14", bottle: "$48" },
        { name: "Wynns Coonawarra Cab Shiraz Merlot", glass: "$13", bottle: "$46" },
        { name: "Devils Corner Pinot Noir", glass: "$13", bottle: "$52" },
        { name: "St Hallett Gamekeeper's Barossa Shiraz", glass: "$13", bottle: "$46" },
        { name: "El Valiente Spanish Tempranillo", glass: "$12", bottle: "$48" }
      ]
    },
    cocktails: [
      { name: "Cairo Summer", price: "$26", description: "Chambord, Vodka, Strawberry Schnapps & Strawberries" },
      { name: "Cleopatra's Kiss", price: "$26", description: "Malibu, Strawberry liqueur, Passion Fruit liqueur & Tropical Juice" },
      { name: "Pharaoh's Poison", price: "$26", description: "Spiced Rum, Malibu, Cointreau & Blue Curacao" },
      { name: "Toblerone", price: "$24", description: "Baileys, Frangelico & Kahlua with ice cream" },
      { name: "Pina Colada", price: "$22", description: "Malibu, Pina Colada mix & pineapple juice" },
      { name: "Espresso Martini", price: "$22", description: "Vodka, Kahlua, Frangelico & fresh espresso shot" },
      { name: "Cosmopolitan", price: "$19", description: "Vodka, Cointreau, lime juice & Cranberry juice" },
      { name: "Vodka Red Bull OR Jager Red Bull", price: "$19", description: "Vodka & Red Bull or Jager bomb" },
      { name: "Vodka OR Tequila Sunrise", price: "$19", description: "Vodka or Tequila & orange juice with Grenadine" },
      { name: "Mojito", price: "$18", description: "Bacardi Rum, fresh mint, lemon & lemonade" },
      { name: "Vodka Karkadeh OR Tequila Karkadeh", price: "$18", description: "Egyptian hibiscus with Vodka or Tequila" }
    ],
    mocktails: [
      { name: "Nefertiti's Dream", price: "$16", description: "Karkadeh, Pineapple juice, aloe vera juice & Tropical fruit pieces" },
      { name: "Egyptian Lemon Mint (MUST TRY)", price: "$14", description: "Fresh lemon juice, fresh mint & ice - A Cairo Nights favourite" },
      { name: "Mango Mojito", price: "$14", description: "Mango juice with Lime & Fresh Mint" }
    ],
    dips: [
      { name: "3 Dips Selection", price: "$27" },
      { name: "Cheese Dip - Feta with olives & spices", price: "$12" },
      { name: "Garlic Dip (Vegan) - Crushed garlic puree with oil & lemon", price: "$12" },
      { name: "Tzatziki - Yoghurt with cucumber & mint", price: "$12" },
      { name: "Peri Peri - Tangy & flavoursome fiery peri peri peppers", price: "$12" },
      { name: "Tahini (Vegan) - Sesame seed butter, vinegar, garlic, lemon & parsley", price: "$12" },
      { name: "Hummus (Vegan) - Chickpeas puree with tahini & olive oil", price: "$12" },
      { name: "Babaganoush (Vegan) - Grilled eggplant, tahini & garlic", price: "$12" },
      { name: "Tourshi (Vegan) - Home made mixed pickles", price: "$11" },
      { name: "Bread Basket (Vegan) - 3 pieces of home made bread", price: "$6" }
    ],
    salads: [
      { name: "Tenderloin Lamb Salad", price: "$29", description: "Grilled lamb tenders on mixed salad leaves & Egyptian dukkah" },
      { name: "Prawn Salad", price: "$29", description: "Grilled prawn on mixed salad leaves with garlic, lemon & olive oil dressing" },
      { name: "Chicken Salad", price: "$28", description: "Marinated grilled chicken on mixed salad leaves with Egyptian style dressing" },
      { name: "Greek Salad", price: "$18", description: "Lettuce, feta cheese, olives, cucumber, tomato & capsicum" },
      { name: "Fattoush Salad", price: "$14", description: "Lettuce, tomato, cucumber, radish, crispy bread & somak with pomegranate dressing" },
      { name: "Salata Baladi (Vegan)", price: "$11", description: "Tomato, cucumber, onion, lettuce with lemon & olive oil dressing" }
    ],
    entrees: [
      { name: "Kebda Iskandarani", price: "$24", description: "Veal liver marinated & pan tossed with chilli, garlic & Chef Tharwat's special spices" },
      { name: "Waraq Enab", price: "$24", description: "Vine leaves stuffed with rice, herbs & beef-mince" },
      { name: "Hawawshi", price: "$24", description: "Spiced ground beef cooked in oven in flat baladi bread with onions, capsicum & chilli" },
      { name: "Calamari", price: "$24", description: "Tender and crispy fried calamari, served with aioli" },
      { name: "Moumbar (GF)", price: "$19", description: "3 pieces of sausage skin stuffed with special spicy rice, tomato, onions & herbs" },
      { name: "Kawareh Soup", price: "$19", description: "Traditional slow-cooked soup of buffalo trotters served with home made bread" },
      { name: "Chicken Wings", price: "$18", description: "Marinated & grilled chicken wings served with garlic dip" },
      { name: "Kobeba", price: "$18", description: "3 pieces of ground beef meat with bulgur wheat, stuffed with spices, pine nuts & onions" },
      { name: "Sambousek Lamb (5 pieces)", price: "$16", description: "Pastry stuffed with lamb mince, onions & spices" },
      { name: "Cheese Sambousek (Vegetarian) (5 pieces)", price: "$16", description: "Pastry stuffed with feta cheese & herbs" },
      { name: "Molokhia Soup", price: "$16", description: "Egyptian stew served with home made bread" },
      { name: "Lentil Soup", price: "$16", description: "Traditional lentil soup served with home made bread" }
    ],
    claypots: [
      { name: "Sayadia Tagen (Seafood)", price: "$40", description: "Barramundi fish fillet, calamari, prawn, tomato puree & capsicum baked in Egyptian claypot" },
      { name: "Akawi Tagen", price: "$38", description: "Ox tail slow cooked in Egyptian claypot with potatoes, onions & spices with plain rice" },
      { name: "Sayadia Tagen (Fish)", price: "$34", description: "Barramundi fish fillet baked with spicy tomato & capsicum sauce in Egyptian claypot" },
      { name: "Moammar Prawn Tagen (GF)", price: "$32", description: "Rice cooked in Egyptian claypot with prawn, garlic, onions & cream" },
      { name: "Moammar Roz Lamb Tagen (GF)", price: "$31", description: "Rice cooked in Egyptian claypot with lamb fillet pieces, onions & cream" },
      { name: "Bamia Tagen (GF)", price: "$29", description: "Egyptian Bamia (Okra) stew with lamb, cooked in Egyptian claypot" },
      { name: "Calamari Iskandarani Tagen (GFO)", price: "$28", description: "Spicy Calamari baked in tomato puree in Egyptian claypot, The Alexandrian way!" },
      { name: "Moussaka Tagen", price: "$28", description: "Eggplant with beef mince & tomato puree topped with bechamel sauce, cooked in Egyptian claypot" },
      { name: "Macarona Bechamel Tagen", price: "$26", description: "Penne pasta with mince beef covered with bechamel sauce cooked in Egyptian claypot" },
      { name: "Moussaka Tagen Falahi (GFO)", price: "$24", description: "Eggplant baked in tomato puree with capsicum slices & chilli served with home made bread" }
    ],
    authenticPlates: [
      { name: "Grilled Fish or Fried Sea Red", price: "$42", description: "Barramundi fillets, prawns & calamari served with sayadia rice, aioli & side salad" },
      { name: "Fattah Shank (GFO)", price: "$42", description: "Lamb shank on rice cooked with angel hair pasta, topped with fried bread pieces & special garlic vinegar sauce" },
      { name: "Samakmak (GF)", price: "$38", description: "Chef Tharwat's Special Fish Dish. Singari Style baked barramundi fillet with onions, capsicum & special spices" },
      { name: "Kawarah (GFO)", price: "$34", description: "Buffalo trotters slow cooked & served on vermicelli rice, topped with fried bread pieces, garlic sauce & soup" },
      { name: "Molokhia Chicken (GF)", price: "$32", description: "Egyptian jute stew served in bowl with half grilled chicken & vermicelli rice" },
      { name: "Koshari (Vegan)", price: "$26", description: "Egypt's popular street food. Black lentils, rice, macaroni pasta, chickpeas, fried onions, salsa & dukkah dressing" }
    ],
    grills: [
      { name: "Cairo King Grill (For 2 people) (GF)", price: "$99", description: "Selection of three dips, 2 Lamb Kebabs, 2 Kofta Skewers, 2 Chicken Kebabs, 2 Wings, 1 Quail with Cairo rice & Salata Baladi" },
      { name: "Grill Mix (GF)", price: "$42", description: "1 lamb kofta, 1 lamb kebab, 1 chicken kebab with garlic & hummus dip, Cairo rice & Salata Baladi" },
      { name: "Cutlets Lamb", price: "$39", description: "Grilled lamb cutlets served with vegetables, thyme sauce & chips" },
      { name: "BBQ Quails (GF)", price: "$36", description: "2 large quails marinated & grilled with Cairo rice, Salata Baladi & garlic dip" },
      { name: "Shish Lamb Kebab (GF)", price: "$34", description: "2 marinated lamb tenderloin with Cairo rice, hummus dip & Salata Baladi" },
      { name: "Kofta Lamb (GF)", price: "$32", description: "2 low fat mince lamb skewers with Cairo rice, hummus dip & Salata Baladi" },
      { name: "Chicken Kebab Shish (GF)", price: "$32", description: "2 large skewers of thigh fillets with Cairo rice, garlic dip & Salata Baladi" }
    ],
    kidsMenu: [
      { name: "Chips & Kofta", price: "$21", description: "1 skewer of lamb kofta with hot chips & tomato sauce (under 12 years)" },
      { name: "Chips & Chicken", price: "$21", description: "1 skewer of thigh fillet with hot chips & tomato sauce (under 12 years)" },
      { name: "Chips & Fish", price: "$21", description: "Fried fish fillet with hot chips & tomato sauce (under 12 years)" },
      { name: "Pasta", price: "$19", description: "Pasta with choice of tomato sauce or bolognese sauce (under 12 years)" },
      { name: "Chips Bowl", price: "$14", description: "Bowl of hot chips with tomato sauce (under 12 years)" }
    ],
    desserts: [
      { name: "Om Ali (MUST TRY)", price: "$16 / $20 / $28 / $36", description: "Traditional Egyptian croissant pudding with Hazelnuts, Sultanas & coconut shreds - 4 sizes: small, medium, large & family" },
      { name: "Mango Konafa", price: "$16", description: "Angel hair pastry served with mango pieces, cream & ice cream" },
      { name: "Mango with Laban bel Roz", price: "$14", description: "Traditional sweet rice pudding with mango" },
      { name: "Laban bel Roz", price: "$12", description: "Traditional sweet rice pudding topped with pistachio, cinnamon powder & sultanas" },
      { name: "Middle Eastern Sweets", price: "$4 / $11", description: "Variety of Middle Eastern sweets & Baklava - 1 piece / 3 pieces" },
      { name: "Ice-Cream", price: "$11", description: "2 scoops of Vanilla ice cream with Strawberry, Chocolate or Caramel sauce" }
    ],
    shisha: {
      heads: [
        { name: "Clay Head", price: "$45" },
        { name: "Premium Head", price: "$50" },
        { name: "Fresh Apple", price: "$50" }
      ],
      adalyaPremium: [
        "Lady Killer", "Punk Man", "Godfather", "Joker 777", "Homer Simpson", "Sheik Money", "Love 66"
      ],
      cairoSignature: [
        "Lady in Blue (House Special)", "Tropical Island", "Lady Killer with Love 66 & Blueberry", 
        "Kiwi with Gum & Mint", "Blue Heaven", "Citrus King", "Blueberry with Gum & Mint", 
        "Orange with Lemon & Mint", "Fruit Fever", "Apple, Kiwi, Gum & Mint"
      ],
      cairoClassics: [
        "Double Apple", "Apple Mint", "Grape", "Grape Mint", "Blueberry", "Blueberry Mint", 
        "Kiwi", "Kiwi Mint", "Watermelon", "Watermelon Mint", "Peach", "Peach Mint", 
        "Lemon Mint", "Orange Mint", "Gum Mint"
      ]
    }
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
                      <p className="text-sm text-muted-foreground mt-4">
                        Espresso shot, Soy milk, Almond Milk, Hazelnut, Vanilla, Caramel syrups $0.80 extra per shot
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                <Card className="bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Tea Pots</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {menuSections.beverages.teaPots.map((tea, index) => (
                        <div key={index} className="flex justify-between items-start">
                          <span className="flex-1 text-sm">{tea.name}</span>
                          <Badge variant="outline" className="ml-4">{tea.price}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Flavoured Teas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {menuSections.beverages.flavouredTeas.map((tea, index) => (
                        <div key={index} className="flex justify-between items-start">
                          <span className="flex-1 text-sm">{tea.name}</span>
                          <Badge variant="outline" className="ml-4">{tea.price}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Arabic Coffee</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {menuSections.beverages.arabicCoffee.map((coffee, index) => (
                        <div key={index} className="flex justify-between items-start">
                          <span className="flex-1 text-sm">{coffee.name}</span>
                          <Badge variant="outline" className="ml-4">{coffee.price}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator className="my-12" />

            {/* Wines & Alcohol */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center egyptian-gold">Wines & Alcoholic Beverages</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <Card className="bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Beers & Ciders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {menuSections.wines.beersAndCiders.map((drink, index) => (
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
                    <CardTitle className="text-xl text-primary">Sparkling</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {menuSections.wines.sparkling.map((wine, index) => (
                        <div key={index} className="space-y-1">
                          <div className="font-medium">{wine.name}</div>
                          <div className="flex justify-between text-sm">
                            <span>Glass: {wine.glass}</span>
                            <span>Bottle: {wine.bottle}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">White Wine</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {menuSections.wines.whiteWine.map((wine, index) => (
                        <div key={index} className="space-y-1">
                          <div className="font-medium text-sm">{wine.name}</div>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Glass: {wine.glass}</span>
                            <span>Bottle: {wine.bottle}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Rosé Wine</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {menuSections.wines.roseWine.map((wine, index) => (
                        <div key={index} className="space-y-1">
                          <div className="font-medium text-sm">{wine.name}</div>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Glass: {wine.glass}</span>
                            <span>Bottle: {wine.bottle}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Red Wine</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {menuSections.wines.redWine.map((wine, index) => (
                        <div key={index} className="space-y-1">
                          <div className="font-medium text-sm">{wine.name}</div>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Glass: {wine.glass}</span>
                            <span>Bottle: {wine.bottle}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 text-center">
                <p className="text-muted-foreground">BYO Wine Corkage: $20 per bottle</p>
                <p className="text-muted-foreground">Please visit the bar to see our great selection of spirits & liqueurs</p>
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

            {/* Mocktails */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center egyptian-gold">Mocktails</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuSections.mocktails.map((mocktail, index) => (
                  <Card key={index} className="bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-lg">{mocktail.name}</h4>
                        <Badge className="bg-primary/10 text-primary">{mocktail.price}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{mocktail.description}</p>
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

            {/* Salads */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center egyptian-gold">Salads</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuSections.salads.map((salad, index) => (
                  <Card key={index} className="bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-lg">{salad.name}</h4>
                        <Badge className="bg-primary/10 text-primary">{salad.price}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{salad.description}</p>
                    </CardContent>
                  </Card>
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

            {/* Authentic Egyptian Plates */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center egyptian-gold">Authentic Egyptian Plates</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuSections.authenticPlates.map((plate, index) => (
                  <Card key={index} className="bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-lg">{plate.name}</h4>
                        <Badge className="bg-primary/10 text-primary">{plate.price}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{plate.description}</p>
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
            <Separator className="my-12" />

            {/* Kids Menu */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center egyptian-gold">Kids Menu</h3>
              <p className="text-center text-muted-foreground mb-8">For kids under 12 years old only!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuSections.kidsMenu.map((item, index) => (
                  <Card key={index} className="bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-lg">{item.name}</h4>
                        <Badge className="bg-primary/10 text-primary">{item.price}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Separator className="my-12" />

            {/* Shisha Menu */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-center egyptian-gold">Shisha Menu</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <Card className="bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Step 1: Pick Your Head</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {menuSections.shisha.heads.map((head, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span>{head.name}</span>
                          <Badge variant="outline">{head.price}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Adalya Premium (+$5)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {menuSections.shisha.adalyaPremium.map((flavor, index) => (
                        <div key={index} className="text-sm">{flavor}</div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Cairo Signature (+$5)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {menuSections.shisha.cairoSignature.map((flavor, index) => (
                        <div key={index} className="text-sm">{flavor}</div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Cairo Classics (Included)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {menuSections.shisha.cairoClassics.map((flavor, index) => (
                        <div key={index} className="text-sm">{flavor}</div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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