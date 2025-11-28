import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import cod1 from "../assets/gallery/cod1.jpg";
import cod2 from "../assets/gallery/cod2.jpg";
import cod3 from "../assets/gallery/cod3.jpg";
import cod5 from "../assets/gallery/cod5.jpg";

function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    {
      id: 1,
      image: cod1,
    },
    {
      id: 2,
      image: cod2,
    },
    {
      id: 3,
      image: cod3,
    },
    {
      id: 4,
      image: cod5,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 pt-20">
      {/* Header */}
      <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
        Gallery
      </h2>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        Explore our research journey through images showcasing our team, field
        work, and community engagement
      </p>

      {/* Main Carousel - Split Layout */}
      <div className="relative mb-16">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
          {/* Slides */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {galleryImages.map((slide, index) => (
              <div key={slide.id} className="min-w-full">
                <div className="w-full h-137 ">
                  {/* Image Side */}
                  <div className="w-full h-full relative cursor-pointer overflow-hidden group">
                    <img
                      src={slide.image}
                      alt={`Gallery Image ${index + 1}`}
                      className="w-full h-full object-cover object-[85%_20%] transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-transparent bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* <button
                    onClick={() => openLightbox(index)}
                    className="px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-fit"
                  >
                    View Full Image
                  </button> */}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 group z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 group z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? "w-12 h-3 bg-linear-to-r from-emerald-600 to-teal-600"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4 text-gray-600 font-medium">
          {currentSlide + 1} / {galleryImages.length}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
