import { pt } from '../lib/pt'

const traditionsBody = [
  "At Cairo By Nights, we honor the rich culinary heritage of Egypt by using traditional cooking techniques that have been perfected over generations. Our chefs bring authentic expertise from Cairo, where they mastered the art of Egyptian cuisine in family kitchens and renowned restaurants. Every dish on our menu tells the story of Egypt's diverse culinary landscape, from the bustling street food markets of Cairo to the refined dining traditions of Alexandria.",
  'Egyptian cooking is characterized by its careful balance of aromatic spices, slow-cooking methods, and the art of layering flavors. Our kitchen takes pride in maintaining complete halal certification while sourcing only the highest quality ingredients. We import authentic Egyptian spices—including our signature seven-spice blend for kofta and the rare molokhia leaves—to ensure every dish captures the true essence of Egyptian flavors that locals in Melbourne crave and newcomers discover with delight.',
  'Traditional Egyptian cooking techniques shine throughout our menu. Our tagens slow-cook for hours in authentic clay pots, allowing lamb or chicken to achieve perfect tenderness while absorbing the complex flavors of apricots, prunes, and traditional spice combinations. Our charcoal grill masters the ancient art of Egyptian grilling, creating the distinctive smoky flavor in our kofta, lamb chops, and mixed grill platters that define authentic Egyptian barbecue.',
  'The cultural significance of Egyptian communal dining is woven into every aspect of our menu. In Egyptian tradition, meals are shared experiences where family and friends gather around abundant spreads of mezze, grilled meats, and aromatic rice dishes. Our banquet packages ($60–$80pp) embrace this philosophy, designed for groups to experience the joy of Egyptian hospitality through generous portions meant for sharing, conversation, and celebration—just as it has been done in Cairo for centuries.',
].join('\n\n')

const ingredientsBody = [
  'At Cairo By Nights, authenticity begins with sourcing the finest ingredients. We partner with trusted halal butchers across Melbourne to ensure our lamb, beef, and chicken meet both halal certification standards and our exacting quality requirements. Every cut of meat is carefully selected and prepared fresh daily in our Carlton kitchen, never frozen, to maintain the tenderness and flavor that Egyptian cuisine demands.',
  "Our spice cabinet tells the story of Egyptian flavors: We import authentic Egyptian seven-spice blend (baharat), rare molokhia leaves, premium cumin from the Nile Delta, and traditional za'atar from specialty Egyptian suppliers. These aren't generic substitutes—these are the exact spices used in Cairo's finest restaurants and Egyptian family kitchens. Our chefs understand that authentic Egyptian cuisine depends on these precise flavors, which is why we go to great lengths to source them directly.",
  "Each morning, our Carlton kitchen begins fresh preparation for the evening service. Our chefs handcraft every dish using traditional Egyptian cooking methods—slow-simmering tagens, hand-rolling grape leaves, charcoal-grilling kofta skewers, and preparing fresh pita bread. This dedication to daily preparation ensures that when you dine at Cairo By Nights, you're experiencing Egyptian cuisine as it's meant to be: fresh, flavorful, and made with the care and attention that generations of Egyptian cooks have brought to their craft.",
].join('\n\n')

export const menuPage = {
  _id: 'menuPage',
  _type: 'menuPage',
  seo: {
    title: 'Egyptian Menu Melbourne | Traditional Halal | Cairo By Nights',
    description:
      'Traditional Egyptian food menu: Kofta, tagen lamb roz moammar, koshari, molokhia. Halal certified. Dine-in Carlton Melbourne. View full menu!',
    canonical: 'https://www.caironightsrestaurant.com.au/menu',
  },
  placeholderHeading: 'Our menu is being updated — please check back soon!',
  hero: {
    heading: 'Cairo By Nights Menu',
    subheading: 'Authentic Egyptian cuisine crafted with love and tradition',
  },
  traditions: {
    heading: 'Egyptian Culinary Traditions',
    subheading: 'Centuries of Authentic Flavors Passed Through Generations',
    body: pt(traditionsBody),
  },
  banquetIntro: {
    heading: 'Banquet Packages',
    intro:
      'Perfect for groups and special occasions. Minimum 8 people. 48-hour advance booking required.',
    infoBoxes: [
      {
        _key: 'b1',
        emoji: '🎉',
        title: 'Perfect for Every Occasion',
        body: 'Our banquet packages are ideal for birthday celebrations, corporate dinners, engagement parties, family reunions, and any special gathering. Each tier offers generous portions designed in the Egyptian tradition of communal feasting.',
      },
      {
        _key: 'b2',
        emoji: '🎭',
        title: 'Customization & Entertainment',
        body: 'We understand that every celebration is unique. Our banquet packages can be customized to accommodate dietary requirements. Enhance your event with our professional belly dancing performance available Friday-Sunday at 9 PM.',
      },
      {
        _key: 'b3',
        emoji: '🏺',
        title: 'Egyptian Feast Tradition',
        body: 'The Egyptian tradition of communal feasting dates back thousands of years. Our banquet service embraces this heritage, presenting dishes family-style to encourage sharing, conversation, and togetherness.',
      },
    ],
    linkParagraph: pt(
      'Planning a large group celebration? Our [private function room](/function-room) accommodates 20-60 guests with customized [banquet menus](/menu#banquet) and optional [entertainment packages](/events).',
    ),
  },
  ingredients: {
    heading: 'Fresh Ingredients, Authentic Flavors',
    subheading: 'Our Commitment to Quality and Authenticity',
    body: pt(ingredientsBody),
  },
  cta: {
    heading: 'Ready to Experience Egypt?',
    body: 'Book your table today and embark on a culinary journey through the flavors of Cairo',
    buttonLabel: 'Make a Reservation',
  },
}
