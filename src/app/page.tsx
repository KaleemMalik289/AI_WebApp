import Hero from '@/components/common/Hero';
import ServiceCard from '@/components/common/ServiceCard';
import CTA from '@/components/common/CTA';
import homeContent from '@/content/home-content.json';

export default function Home() {
  return (
    <>
      <Hero
        title={homeContent.hero.title}
        subtitle={homeContent.hero.subtitle}
        primaryButtonText={homeContent.hero.cta_primary}
        primaryButtonLink="/contact"
        secondaryButtonText={homeContent.hero.cta_secondary}
        secondaryButtonLink="/services"
      />

      {/* Featured Services Section */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeContent.featured_services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={`/services/${service.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Transform Your Business?"
        description="Let's discuss how AI can drive real results for your organization."
        primaryButtonText="Book a Discovery Call"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Services"
        secondaryButtonLink="/services"
      />
    </>
  );
}
