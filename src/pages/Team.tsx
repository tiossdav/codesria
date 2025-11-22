import pi from "./../assets/pi.jpg";
import a_pi from "./../assets/a_pi.jpg";
import team1 from "./../assets/team1.jpg";
import team2 from "./../assets/team2.jpg";
import team3 from "./../assets/team3.jpg";

const teamMembers = [
  {
    name: "Dr. SESAN Temilade",
    role: "Principal Investigator",
    image: pi,
    bio: "Expert in Social Development",
  },
  {
    name: "Dr. ADEWUMI Tobi",
    role: "Asst. Principal Investigator",
    image: a_pi,
    bio: "Specializes in Social Sciences and Urban Political Ecology",
  },
  {
    name: "Dr. DAKYAGA Francis",
    role: "Research Fellow",
    image: team3,
    bio: "",
  },
  {
    name: "TEDONGMO Nedege",
    role: "Research Fellow",
    image: team2,
    bio: "",
  },
  {
    name: "POUNTOUGNIGNI Njuh",
    role: "Research Fellow",
    image: team1,
    bio: "",
  },
];

function Team() {
  return (
    <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 py-20 font-inter">
      <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
        Meet Our Team
      </h2>
      {/* <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Our interdisciplinary team combines expertise from engineering, social
        sciences, gender studies, and environmental sustainability
      </p> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-emerald-600 font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
