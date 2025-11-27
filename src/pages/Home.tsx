import { useLocation } from "wouter";
import aerial from "../assets/aerial.mp4";
import About from "./About";
import Research from "./Research";
import Publications from "./Publications";
import Team from "./Team";
import Contact from "./Contact";
import Gallery from "./Gallery";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen mt-20 font-inter">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={aerial} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/70"></div>
        </div>

        <div className="relative w-full h-full flex items-center px-4">
          <div className="max-w-7xl mx-auto w-full">
            <div className="w-full flex flex-col items-center text-center ">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Hydro-Power, S(hr)inking State? Gender and Politics of Renewable
                Energy in the Lake Chad Basin{" "}
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
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  Learn More
                </button>
                <button
                  onClick={() => setLocation("/research")}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
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
      <Gallery />
      <Research />
      <Publications />
      <Team />
      <Contact />
    </>
  );
}
