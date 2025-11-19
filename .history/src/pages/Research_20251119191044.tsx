import { Globe, Lightbulb, Recycle, Users } from "lucide-react";

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
            Informal Cultures & Livelihoods
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Examining the gendered informal cultures, livelihoods and
            technologies of tyre-related work in urban contexts.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="bg-teal-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
            <Globe className="h-8 w-8 text-teal-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Road Ecologies
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Understanding the complex place of waste tyres in street and road
            ecologies and their environmental impact.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="bg-amber-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
            <Recycle className="h-8 w-8 text-amber-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Circular Economies
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Exploring circular economy models and the innovative repurposing of
            end-of-life tyres in urban settings.
          </p>
        </div>
      </div>

      <div className="bg-linear-to-br from-emerald-600 to-teal-600 rounded-lg p-12 text-white">
        <div className="flex items-start">
          <Lightbulb className="h-12 w-12 mr-6 shrink-0 mt-1" />
          <div>
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-xl leading-relaxed">
              We aim to put ELT challenges and opportunities at the heart of a
              vision for a sustainable future, creating solutions that improve
              well-being for both workers and residents in rapidly growing
              African cities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Research;
