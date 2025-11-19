function About() {
  return (
    <div className="max-w-5xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 py-10 font-inter">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">About</h2>
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Hydro Power, S(hr)inking States? Politics of Renewable Energy, Just
          Transitions and Urban Sustainability in the Lake Chad Basin is a
          collaborative, transdisciplinary research initiative that responds to
          one of Africa’s most pressing environmental challenges: the rapid
          shrinkage of Lake Chad and its far-reaching impacts on state
          stability, urban life, and energy futures.
        </p>
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          As governments and communities turn to hydropower and other renewable
          energy options, the project investigates how these transitions reshape
          governance systems, social equity, and everyday survival in one of the
          continent’s most fragile ecological zones. By examining the political,
          social, and infrastructural transformations underway, the study seeks
          to provide evidence-based pathways for inclusive, just, and
          climate-resilient development.
        </p>
        <p className="text-xl text-gray-700 leading-relaxed mb-1">
          The project focuses on four overarching questions:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>
            How do hydropower projects influence renewable energy politics
            across the region?
          </li>
          <li>
            How are cities adapting to environmental decline and energy
            transitions?
          </li>
          <li>
            In what ways do gender and generational dynamics shape experiences
            of change?
          </li>
          <li>
            How can a just transition be achieved in settings with limited
            resources and institutional capacity?
          </li>
        </ul>

        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 my-8">
          <p className="text-gray-800 italic">
            This project is funded by the British Academy and is part of the
            wider GCRF 'Urban Infrastructures of Well-Being' research programme.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
