export const StatsSection = () => {
  const stats = [
    { number: '8+', label: 'EVENTS MONTHLY' },
    { number: '5', label: 'EXPERT CHEFS' },
    { number: '5000+', label: 'SERVED CUSTOMERS' },
    { number: '15000+', label: 'SERVED DISHES' }
  ];

  return (
    <section className="section-padding bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="stats-card">
              <div className="egyptian-gold text-3xl lg:text-4xl font-bold font-playfair mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm font-inter">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};