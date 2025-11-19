import { ExternalLink } from "lucide-react";

const publications = [
  {
    title: "End-of-Life Tyres in African Urban Contexts",
    authors: "Chen, S., Johnson, M., Patel, A.",
    journal: "Environmental Science & Policy",
    year: "2024",
    link: "#",
  },
  {
    title: "Gendered Informal Economies: Tyre Repair Work in Lagos",
    authors: "Patel, A., Johnson, M., Chen, S.",
    journal: "Urban Studies",
    year: "2024",
    link: "#",
  },
  {
    title: "Circular Economy Solutions for Urban Waste",
    authors: "Chen, S., Rivera, A.",
    journal: "Sustainability Journal",
    year: "2023",
    link: "#",
  },
];

function Publications() {
  return (
    <div className="max-w-5xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        Publications & Research Outputs
      </h2>
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {pub.title}
            </h3>
            <p className="text-gray-600 mb-2">{pub.authors}</p>
            <p className="text-emerald-600 font-semibold mb-4">
              {pub.journal} ({pub.year})
            </p>
            <a
              href={pub.link}
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Read Full Paper <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Publications;
