interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
}

export default function Hero({
  title,
  subtitle,
  primaryButtonText = "Get Started",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "/services",
  backgroundImage,
}: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-16 bg-linear-to-b from-gray-50 dark:from-slate-800 to-white dark:to-slate-900 transition-colors duration-300"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/90 dark:bg-slate-900/80" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-black dark:text-white mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={primaryButtonLink}
            className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 inline-block shadow-lg hover:shadow-xl"
          >
            {primaryButtonText}
          </a>
          <a
            href={secondaryButtonLink}
            className="px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-lg hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors inline-block"
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
