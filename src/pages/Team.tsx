import pi from "./../assets/pi.jpg";
import a_pi from "./../assets/a_pi.jpg";
import team1 from "./../assets/team1.jpg";
import team2 from "./../assets/team2.jpg";
import team3 from "./../assets/team3.jpg";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. SESAN Temilade",
    role: "Principal Investigator",
    image: pi,
    bio: "Expert in Social Development",
    institute: "University of Ibadan, Nigeria",
    email: "",
    linkedin: "https://www.linkedin.com/in/temilade-sesan-b748323/",
  },
  {
    name: "ADÉWÙNMÍ (TOBI) Olúwatóbilóba ",
    role: "Asst. Principal Investigator",
    image: a_pi,
    bio: "Specializes in Social Sciences and Urban Political Ecology",
    institute: "University of Illinois, USA",
    email: "",
    linkedin: "https://www.linkedin.com/in/tobiadewunmi/",
  },
  {
    name: "Dr. DAKYAGA Francis",
    role: "Research Fellow",
    image: team3,
    bio: "Expertise in Governance and Social Identity Dynamics",
    institute:
      "SD Dombo University of Business and Integrated Development Studies, Wa, Ghana",
    email: "",
    linkedin:
      "https://www.linkedin.com/in/dr-ing-francis-dakyaga-ph-d-31628291/",
  },
  {
    name: "TEDONGMO Ludvin Nadège",
    role: "Research Fellow",
    image: team2,
    bio: "Specializes in Peace and Security Studies and Policy and Institutional Dynamics in Africa",
    institute: "University of Dschang, Dschang,Cameroon",
    email: "",
    linkedin: "https://www.linkedin.com/in/tedongmo-nad%C3%A8ge-04060196/",
  },
  {
    name: "POUNTOUGNIGNI Ludovic Njuh",
    role: "Research Fellow",
    image: team1,
    bio: "Specializes in African Regionalism & Integration and Political Economy",
    institute: "University of Ziguinchor Senegal",
    email: "",
    linkedin: "https://www.linkedin.com/in/ludovic-njuh-bb2277b3/",
  },
];

function Team() {
  return (
    <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 pt-20 font-sans">
      <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
        Meet Our Team
      </h2>

      <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg border border-gray-100 
                       overflow-hidden transform transition-all duration-500 ease-in-out
                       hover:shadow-2xl hover:-translate-y-2 flex flex-col"
          >
            <div className="overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col grow">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-emerald-600 font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {member.bio}
              </p>

              {/* This div will push to the bottom */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="font-medium text-sm text-gray-600 mb-2">
                  Connect:
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition"
                  >
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </a>

                  <a
                    href="https://codesria.org/mri-2025-selected-projects/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-100 rounded-full hover:bg-blue-100 transition"
                  >
                    Reference Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
