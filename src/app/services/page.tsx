import Hero from '@/components/common/Hero';
import ServiceCard from '@/components/common/ServiceCard';
import CTA from '@/components/common/CTA';
import servicesContent from '@/content/services-content.json';

export default function Services() {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Comprehensive AI solutions designed to drive real business results"
      />

      <section className="py-16 sm:py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesContent.services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                href={`/services/${service.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Industry Expertise',
                description: 'Years of experience delivering AI solutions across various industries.',
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored implementations that fit your unique business needs.',
              },
              {
                title: 'End-to-End Support',
                description: 'From consultation through deployment and ongoing optimization.',
              },
              {
                title: 'Measurable Results',
                description: 'We focus on ROI and delivering tangible business improvements.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-gray-200 dark:border-slate-700 transition-all duration-300">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Get Started?"
        description="Let's discuss which service is right for your business."
        primaryButtonText="Book a Discovery Call"
        primaryButtonLink="/contact"
      />
    </>
  );
}
