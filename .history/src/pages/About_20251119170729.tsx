function About() {
  return (
    <div className="max-w-5xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 py-10 font-inter">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">About</h2>
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Hydro Power, S(hr)inking States? Politics of Renewable Energy, Just
          Transitions and Urban Sustainability in the Lake Chad Basin is a
          transdisciplinary research project examining how the shrinking of Lake
          Chad and increasing environmental fragility are reshaping politics,
          energy transitions, and urban life in the region.
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
