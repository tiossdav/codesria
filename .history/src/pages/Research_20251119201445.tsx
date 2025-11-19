import { Globe, Lightbulb, Recycle, Users, Zap } from "lucide-react";

function Research() {
  return (
    <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 py-20 font-inter">
      <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
        Research Focus Areas
      </h2>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        'Pneuma-city' bridges formal and informal infrastructures by
        conceptually tracing the role of tyres as 'frictional' within urban
        contexts where automobile transport is hegemonic.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="bg-emerald-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
            <Users className="h-8 w-8 text-emerald-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Renewable Energy Politics
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Explores how hydropower projects reshape state power, governance,
            and decision-making in fragile Lake Chad Basin contexts experiencing
            climate stress.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="bg-teal-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
            <Globe className="h-8 w-8 text-teal-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Urban Climate Adaptation
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Examines how cities respond to shrinking water resources and energy
            transitions, transforming infrastructure, livelihoods, and everyday
            survival strategies.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
            <Zap className="h-8 w-8 text-blue-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Just Social Transitions
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Investigates gender, youth, and community impacts of energy shifts,
            ensuring equitable, inclusive pathways that protect vulnerable
            groups in changing environments.
          </p>
        </div>
      </div>

      <div className="bg-linear-to-br from-emerald-600 to-teal-600 rounded-lg p-12 text-white">
        <div className="flex items-start">
          <Lightbulb className="h-12 w-12 mr-6 shrink-0 mt-1" />
          <div>
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-xl leading-relaxed">
              To be one of the topmost African non-profit organizations that
              fosters innovative research and collaboration across disciplines,
              generations, and geographical boundaries, empowering African
              scholars and professionals to address complex global challenges
              and contribute to the advancement of African/African Diaspora
              studies and sustainable development in Africa and beyond!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Research;
