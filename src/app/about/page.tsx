import Hero from '@/components/common/Hero';
import CTA from '@/components/common/CTA';

export default function About() {
  return (
    <>
      <Hero
        title="About Us"
        subtitle="Driving business transformation through intelligent AI solutions"
      />

      <section className="py-16 sm:py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We empower businesses to leverage artificial intelligence for meaningful growth and operational excellence. Our mission is to make AI accessible, understandable, and impactful for organizations of all sizes.
            </p>
          </div>

          {/* Vision Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Our Vision</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A future where AI is not a luxury but a strategic advantage for every business, enabling teams to focus on what matters most while intelligent systems handle complex, repetitive tasks.
            </p>
          </div>

          {/* Values Section */}
          <div>
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Excellence',
                  description: 'We deliver premium solutions with meticulous attention to detail and quality.',
                },
                {
                  title: 'Innovation',
                  description: 'We stay at the forefront of AI technology to provide cutting-edge solutions.',
                },
                {
                  title: 'Partnership',
                  description: 'We work collaboratively with clients, treating their success as our own.',
                },
              ].map((value) => (
                <div key={value.title} className="text-center p-6 rounded-lg bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Let's Work Together"
        description="Ready to explore how AI can transform your business?"
        primaryButtonText="Schedule a Call"
        primaryButtonLink="/contact"
      />
    </>
  );
}
