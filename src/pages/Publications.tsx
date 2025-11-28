import { ExternalLink } from "lucide-react";

const publications = [
  {
    title:
      "Nigeria’s chronic power shortages: mini grids were going to crack the problem for rural people, but they haven’t. Here’s why.",
    authors: "Sesan, T.",
    journal: "Environmental Science & Policy",
    year: "2024",
    link: "  https://theconversation.com/nigerias-chronic-power-shortages-mini-grids-were-going-to-crack-the-problem-for-rural-people-but-they-havent-heres-why-233363",
  },
  {
    title:
      "Strengthening commercial viability through greater inclusiveness in rural mini-grid deployment: Insights from Nigeria and Kenya.",
    authors:
      "Sesan, T., Fajardo, A., Baker, L., Uduka, U., Kausya, M., Kerr, D., Onsongo, D., Ugwu, O., Eleri, E. & Bhattacharyya, S.",
    journal: "Urban Studies",
    year: "2024",
    link: "#",
  },
  {
    title:
      "Urban housing journeys: Collaborative housing configurations for improving access to housing.",
    authors: "Dakyaga, F., Bagson, E., & Sillim, M. L. ",
    journal: "Sustainability Journal",
    year: "2025",
    link: "#",
  },
  {
    title:
      "Cameroon Facing Post-Cold War Security Requirements (1990–2013),” in POKAM KAMDEM",
    authors: "Nadège Ludvine TEDONGMO & Thierry DJIFACK",
    journal: "Sustainability Journal",
    year: "2020",
    link: "#",
  },
  {
    title:
      "Misgovernance of Natural Resources, Identity Disputes, and Maritime Violence in the Gulf of Guinea,” in Extremisms, Wars, Peace, and Development in Africa Since Independence",
    authors: "Nadège Ludvine TEDONGMO",
    journal: "Sustainability Journal",
    year: "2023",
    link: "#",
  },
  {
    title:
      "Between Climate Change Narratives and Policy Actions: The Choice of Developing a Sustainable Development Agenda for Nigeria",
    authors: "Adewunmi, O.",
    journal: "Sustainability Journal",
    year: "2022",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2673505",
  },
];

function Publications() {
  return (
    <div className="max-w-5xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 pt-20 font-inter">
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
            <p className="text-emerald-600 font-semibold mb-4">{pub.year}</p>
            <a
              href={pub.link && pub.link !== "#" ? pub.link : "/"}
              target="_blank"
              rel="noopener noreferrer"
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
