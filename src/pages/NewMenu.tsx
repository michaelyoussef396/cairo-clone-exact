import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PortableTextContent } from '@/components/PortableTextContent';
import { useMenu } from '@/hooks/useMenu';
import { useBanquets } from '@/hooks/useBanquets';
import { usePage } from '@/hooks/usePage';
import { useState } from 'react';
import type { MenuItem } from '@/lib/sanity.types';

const priceBadge = (item: MenuItem) => {
  if (item.priceText) return item.priceText;
  if (item.prices?.length) {
    return item.prices.map((t) => (t.label ? `${t.label} ${t.amount}` : t.amount)).join(' • ');
  }
  return 'Price on request';
};

// Toggle to true to restore the full menu once new pricing is finalized.
const SHOW_MENU = true;

const NewMenu = () => {
  const { data: categories = [], isLoading } = useMenu();
  const { data: banquetOptions = [] } = useBanquets();
  const { data: page } = usePage('menuPage');
  const [activeCategory, setActiveCategory] = useState<string | 'all'>('all');

  const placeholderHeading =
    page?.placeholderHeading || 'Our menu is being updated — please check back soon!';

  const totalItems = categories.reduce((n, c) => n + c.items.length, 0);
  const cocktailsCount = categories.find((c) => c.key === 'Cocktails')?.items.length || 0;
  const mainsCount = categories.find((c) => c.key === 'mains')?.items.length || 0;
  // The original filter button for the Dips category read "Dips" (its section
  // heading is "Dips & Spreads"); preserve that exactly.
  const categoryButtons = categories.map((c) => ({
    key: c.key,
    display: c.key === 'Dips' ? 'Dips' : c.displayTitle,
  }));
  const visibleCategories =
    activeCategory === 'all' ? categories : categories.filter((c) => c.key === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <SEO
        title={page?.seo?.title || 'Egyptian Menu Melbourne | Traditional Halal | Cairo By Nights'}
        description={
          page?.seo?.description ||
          'Traditional Egyptian food menu: Kofta, tagen lamb roz moammar, koshari, molokhia. Halal certified. Dine-in Carlton Melbourne. View full menu!'
        }
        canonical={page?.seo?.canonical || 'https://www.caironightsrestaurant.com.au/menu'}
      />
      <Header />
      <Breadcrumbs />

      {!SHOW_MENU && (
        <section className="section-padding bg-background flex items-center justify-center min-h-[60vh]">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold egyptian-gold mb-6 leading-tight">
              {placeholderHeading}
            </h1>
            <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
          </div>
        </section>
      )}

      {SHOW_MENU && isLoading && (
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground">Loading menu...</p>
          </div>
        </div>
      )}

      {SHOW_MENU && !isLoading && (
        <>
          {/* Hero Section */}
          <section className="relative h-[60vh] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">{page?.hero?.heading || 'Cairo By Nights Menu'}</h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                {page?.hero?.subheading || 'Authentic Egyptian cuisine crafted with love and tradition'}
              </p>
            </div>
          </section>

          {/* Egyptian Culinary Traditions */}
          {page?.traditions && (
            <section className="section-padding bg-background">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">{page.traditions.heading}</h2>
                    <p className="text-lg text-muted-foreground">{page.traditions.subheading}</p>
                  </div>
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <PortableTextContent value={page.traditions.body} strongClassName="text-foreground" />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Menu Statistics */}
          <section className="section-padding bg-card/50">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <Card className="text-center bg-primary/5">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">{totalItems}</div>
                    <div className="text-sm text-muted-foreground">Total Items</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-muted/10">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-foreground mb-2">{categories.length}</div>
                    <div className="text-sm text-muted-foreground">Categories</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-accent/5">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-accent mb-2">{cocktailsCount}</div>
                    <div className="text-sm text-muted-foreground">Cocktails</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-muted/10">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-foreground mb-2">{mainsCount}</div>
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
                  {page?.banquetIntro?.heading || 'Banquet Packages'}
                </h2>
                <div className="w-32 h-1 bg-gradient-gold mx-auto rounded-full mb-6"></div>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {page?.banquetIntro?.intro ||
                    'Perfect for groups and special occasions. Minimum 8 people. 48-hour advance booking required.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
                {banquetOptions.map((option, index) => (
                  <div
                    key={index}
                    className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-gold opacity-10 rounded-bl-full"></div>
                    <div className="text-center mb-6 md:mb-8 relative z-10">
                      <div className="text-3xl md:text-4xl lg:text-5xl font-bold egyptian-gold mb-1 group-hover:scale-110 transition-transform duration-300">
                        {option.price}
                      </div>
                      <p className="text-muted-foreground font-medium text-sm md:text-base">{option.perPerson}</p>
                    </div>
                    <div className="space-y-3 md:space-y-4">
                      {option.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="p-2 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                          {item.label && !item.value && (
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{item.label}</p>
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

              {page?.banquetIntro && (
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-muted-foreground">
                  {(page.banquetIntro.infoBoxes || []).map((box: any, i: number) => (
                    <div
                      key={i}
                      className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <div className="text-4xl mb-4 text-center">{box.emoji}</div>
                      <h3 className="text-xl font-playfair font-semibold mb-4 text-primary text-center">{box.title}</h3>
                      <p className="leading-relaxed">{box.body}</p>
                    </div>
                  ))}
                  <div className="text-muted-foreground mb-6">
                    <PortableTextContent value={page.banquetIntro.linkParagraph} />
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Menu Sections */}
          <section className="section-padding">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Our Complete Menu</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
              </div>

              <div className="mb-16">
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
                {visibleCategories.map((category) => {
                  if (!category.items.length) return null;
                  return (
                    <div key={category.key}>
                      <h3 className="text-3xl font-bold mb-8 text-center text-primary">{category.displayTitle}</h3>
                      <div className="space-y-8">
                        {category.items.map((item, index) => {
                          if (item.isSubHeading) {
                            return (
                              <div key={index} className="mt-8 mb-6">
                                <h4
                                  className="text-2xl font-bold text-[#D4AF37] mb-6"
                                  style={{ marginTop: index > 0 ? '24px' : '0', marginBottom: '16px' }}
                                >
                                  {item.name}
                                </h4>
                              </div>
                            );
                          }
                          return (
                            <Card key={index} className="bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                              <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                  <h4 className="font-bold text-lg text-foreground">{item.name}</h4>
                                  <Badge className="bg-primary/10 text-primary ml-2 flex-shrink-0">{priceBadge(item)}</Badge>
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
          {page?.ingredients && (
            <section className="section-padding bg-background">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">{page.ingredients.heading}</h2>
                    <p className="text-lg text-muted-foreground">{page.ingredients.subheading}</p>
                  </div>
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <PortableTextContent value={page.ingredients.body} strongClassName="text-foreground" />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Call to Action */}
          <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6 text-primary">{page?.cta?.heading || 'Ready to Experience Egypt?'}</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {page?.cta?.body || 'Book your table today and embark on a culinary journey through the flavors of Cairo'}
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {page?.cta?.buttonLabel || 'Make a Reservation'}
              </Button>
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
};

export default NewMenu;
