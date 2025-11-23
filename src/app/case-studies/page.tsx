import Hero from '@/components/common/Hero';
import TestimonialCard from '@/components/common/TestimonialCard';
import CTA from '@/components/common/CTA';
import caseStudiesContent from '@/content/case-studies-content.json';

export default function CaseStudies() {
  return (
    <>
      <Hero
        title="Customer Solutions"
        subtitle="Real results from real clients. See how we've helped businesses transform."
      />

      <section className="py-16 sm:py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Testimonials</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Hear what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {caseStudiesContent.testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                content={testimonial.content}
                image={testimonial.image}
              />
            ))}
          </div>

          <div className="border-t border-gray-200 dark:border-slate-800 pt-16">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8">Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudiesContent.case_studies.map((caseStudy) => (
                <div
                  key={caseStudy.id}
                  className="bg-gray-50 dark:bg-slate-800 rounded-lg overflow-hidden border border-gray-200 dark:border-slate-700 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-gray-300 dark:bg-slate-700 h-48 flex items-center justify-center text-gray-600 dark:text-gray-400">
                    {caseStudy.image === 'placeholder' ? (
                      <p>Image Placeholder</p>
                    ) : (
                      <picture>
                        <img
                          src={caseStudy.image}
                          alt={caseStudy.title}
                          className="w-full h-full object-cover"
                        />
                      </picture>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-black dark:text-white">
                        {caseStudy.title}
                      </h3>
                      {caseStudy.featured && (
                        <span className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-semibold rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{caseStudy.description}</p>
                    <a
                      href="#"
                      className="text-black dark:text-white font-semibold hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      Read the full story →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Let's Create Your Success Story"
        description="Join our growing list of clients achieving remarkable results with AI."
        primaryButtonText="Get Started Today"
        primaryButtonLink="/contact"
      />
    </>
  );
}
