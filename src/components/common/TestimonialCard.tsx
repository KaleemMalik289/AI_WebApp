interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  image,
}: TestimonialProps) {
  return (
    <div className="p-8 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 hover:border-gray-300 dark:hover:border-slate-600">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400">
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-700 dark:text-gray-200 mb-6 italic">&quot;{content}&quot;</p>
      <div className="flex items-center">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full mr-4 bg-gray-300 dark:bg-slate-600 object-cover"
          />
        )}
        <div>
          <p className="font-semibold text-black dark:text-white">{name}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
}
