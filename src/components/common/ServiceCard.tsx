interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  href?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  href = "#",
}: ServiceCardProps) {
  return (
    <a
      href={href}
      className="group p-8 border border-gray-200 dark:border-slate-700 rounded-xl hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-800 hover:border-black dark:hover:border-white hover:bg-gray-50 dark:hover:bg-slate-700"
    >
      {icon && (
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
        {description}
      </p>
      <div className="mt-4 text-black dark:text-white font-semibold flex items-center group-hover:translate-x-1 transition-transform">
        Learn more →
      </div>
    </a>
  );
}
