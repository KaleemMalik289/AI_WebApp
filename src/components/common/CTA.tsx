interface CTAProps {
  title: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function CTA({
  title,
  description,
  primaryButtonText = "Get Started",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "/services",
}: CTAProps) {
  return (
    <section className="py-16 bg-black dark:bg-linear-to-r dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-white transition-all duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
        {description && (
          <p className="text-lg text-gray-300 dark:text-gray-300 mb-8">{description}</p>
        )}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={primaryButtonLink}
            className="px-8 py-3 bg-white dark:bg-white text-black font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {primaryButtonText}
          </a>
          <a
            href={secondaryButtonLink}
            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black transition-all duration-300"
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
