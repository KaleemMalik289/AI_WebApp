import { notFound } from 'next/navigation';
import servicesContent from '@/content/services-content.json';
import CTA from '@/components/common/CTA';

interface ServiceDetailProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ServiceDetailProps) {
  const { id } = await params;
  const service = servicesContent.services.find((s) => s.id === id);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return servicesContent.services.map((service) => ({
    id: service.id,
  }));
}

export default async function ServiceDetail({ params }: ServiceDetailProps) {
  const { id } = await params;
  const service = servicesContent.services.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="pt-24 pb-16 bg-linear-to-b from-gray-50 dark:from-slate-900 to-white dark:to-slate-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-black dark:text-white mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Overview</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {service.long_description}
            </p>
          </div>

          {service.benefits && service.benefits.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-8">
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-semibold">
                        ✓
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-lg border border-gray-200 dark:border-slate-700 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.duration && (
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                    Timeline
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.duration}</p>
                </div>
              )}
              {service.pricing && (
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                    Pricing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.pricing}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Implement This Service?"
        description="Let's discuss your specific needs and create a customized plan."
        primaryButtonText="Schedule a Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="Back to Services"
        secondaryButtonLink="/services"
      />
    </>
  );
}
