import { useLocation } from "wouter";
import power from "../assets/power.jpg";
import About from "./About";
import Research from "./Research";
import Publications from "./Publications";
import Team from "./Team";
import Contact from "./Contact";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen mt-20 font-inter">
        <div className="absolute inset-0">
          <img
            src={power}
            alt="Urban African street"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative h-full flex items-center px-4">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Hydro-Power S(hr)inking State: Renewable energy in Lake Chad
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
                This research explores Lake Chad’s environmental crisis,
                analyzing hydropower, urban adaptation, gender equity, and just
                transition through comparative, mixed-method studies across Chad
                and Nigeria to inform inclusive, sustainable governance and
                development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setLocation("/obj")}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
                >
                  Learn More
                </button>
                <button
                  onClick={() => setLocation("/research")}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg transition-all"
                >
                  Our Research
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Sections Below Hero */}
      <About />
      <Research />
      <Publications />
      <Team />
      <Contact />
    </>
  );
}
