function About() {
  return (
    <div className="max-w-5xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">
        About Pneuma-City
      </h2>
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          This interdisciplinary project, combining engineering and social
          sciences, addresses a global environmental challenge that is visibly
          dominant in African streetscapes: the ubiquity of end-of-life tyres
          (ELTs). Focusing on Lagos, the fastest growing city in Sub-Saharan
          Africa, 'Pneuma-city' explores the multifaceted impact of used tyres
          on road ecologies, while examining the urban economies of tyre repair
          and repurposing.
        </p>
        <p className="text-xl text-gray-700 leading-relaxed mb-8">
          The project ultimately aims to promote social and technical solutions
          to create more sustainable urban environments that in turn improve the
          well-being of workers and residents.
        </p>

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
