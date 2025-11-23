import Hero from '@/components/common/Hero';
import ContactForm from '@/components/common/ContactForm';
import siteConfig from '@/content/site-config.json';

export default function Contact() {
  return (
    <>
      <Hero
        title="Get In Touch"
        subtitle="Let's discuss how we can help transform your business with AI"
      />

      <section className="py-16 sm:py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Email',
                description: siteConfig.social.email,
                icon: '✉️',
              },
              {
                title: 'Response Time',
                description: 'Within 24 business hours',
                icon: '⏱️',
              },
              {
                title: 'Availability',
                description: 'Mon - Fri, 9 AM - 6 PM',
                icon: '📅',
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-lg bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 dark:border-slate-800 pt-16">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-2 text-center">
              Send us a Message
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
            Or Book a Discovery Call
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Prefer to schedule a call? Click below to book a free 30-minute discovery call with our team.
          </p>
          <div className="text-center">
            <a
              href="https://calendly.com/your-calendly-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book a Free Discovery Call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
