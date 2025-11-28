import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  BadgeCheck,
  CloudSun,
  Lightbulb,
  Zap,
} from "lucide-react";

function Research() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const researchHighlights = [
    {
      id: 1,
      title: "Renewable Energy Politics",
      description:
        "Explores how hydropower projects reshape state power, governance, and decision-making in fragile Lake Chad Basin contexts experiencing climate stress.",
      icon: Zap,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      linear: "from-blue-500 to-blue-700",
      image: "⚡",
    },
    {
      id: 2,
      title: "Just Social Transitions",
      description:
        "Investigates gender, youth, and community impacts of energy shifts, ensuring equitable, inclusive pathways that protect vulnerable groups in changing environments.",
      icon: BadgeCheck,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      linear: "from-emerald-500 to-emerald-700",
      image: "✓",
    },
    {
      id: 3,
      title: "Urban Climate Adaptation",
      description:
        "Examines how cities respond to shrinking water resources and energy transitions, transforming infrastructure, livelihoods, and everyday survival strategies.",
      icon: CloudSun,
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      linear: "from-amber-500 to-amber-700",
      image: "☀️",
    },
    {
      id: 4,
      title: "Community Empowerment",
      description:
        "Fostering innovative research and collaboration across disciplines, generations, and geographical boundaries, empowering African scholars to address complex global challenges.",
      icon: Lightbulb,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      linear: "from-purple-500 to-purple-700",
      image: "💡",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % researchHighlights.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + researchHighlights.length) % researchHighlights.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % researchHighlights.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, researchHighlights.length]);

  const dotColors = [
    "from-blue-600 to-cyan-600",
    "from-emerald-600 to-teal-600",
    "from-amber-600 to-orange-600",
    "from-purple-600 to-pink-600",
  ];

  return (
    <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 pt-20 font-inter">
      {/* Header */}
      <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
        Research Focus Areas
      </h2>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Explores the politics of renewable energy in the Lake Chad Basin,
        examining how hydropower development, urban adaptation, and just
        transitions reshape governance, social equity, and everyday life in
        fragile African contexts.
      </p>

      {/* Carousel */}
      <div className="relative mb-16">
        <div
          className="relative overflow-hidden rounded-2xl shadow-2xl bg-white"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Slides */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {researchHighlights.map((slide) => {
              const SlideIcon = slide.icon;
              return (
                <div key={slide.id} className="min-w-full">
                  <div className="grid md:grid-cols-2 gap-8 p-12 items-center min-h-[400px]">
                    {/* Icon/Visual Side */}
                    <div className="flex items-center justify-center">
                      <div
                        className={`w-64 h-64 bg-linear-to-br ${slide.linear} rounded-3xl flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-300`}
                      >
                        <SlideIcon
                          className="w-32 h-32 text-white"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-6">
                      <div
                        className={`${slide.iconBg} w-16 h-16 rounded-lg flex items-center justify-center`}
                      >
                        <SlideIcon className={`h-8 w-8 ${slide.iconColor}`} />
                      </div>

                      <h3 className="text-3xl font-bold text-gray-900">
                        {slide.title}
                      </h3>

                      <p className="text-lg text-gray-600 leading-relaxed">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-emerald-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-emerald-600" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {researchHighlights.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? `w-6 h-3  bg-linear-to-r ${dotColors[index]}`
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4 text-gray-600 font-medium">
          {currentSlide + 1} / {researchHighlights.length}
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-linear-to-br from-emerald-600 to-teal-600 rounded-lg p-12 text-white shadow-xl">
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
