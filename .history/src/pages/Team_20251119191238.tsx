const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Principal Investigator",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Expert in sustainable urban development and environmental engineering",
  },
  {
    name: "Dr. Marcus Johnson",
    role: "Co-Investigator",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    bio: "Specializes in social sciences and informal economies research",
  },
  {
    name: "Dr. Aisha Patel",
    role: "Research Fellow",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Focus on gender studies and urban livelihoods",
  },
  {
    name: "Alex Rivera",
    role: "Research Assistant",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
    bio: "Researching circular economy models and waste management systems",
  },
];

function Team() {
  return (
    <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 py-10 font-inter">
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
