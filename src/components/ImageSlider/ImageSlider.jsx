import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const sliderImages = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1598885159559-2678ed53f49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Choose Your Favorite Players",
      description: "Personalize your Premier League experience"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1626248801379-51a0748a5f96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Track Your Team",
      description: "Follow your club's progress throughout the season"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Exclusive Content",
      description: "Access behind-the-scenes footage and interviews"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div 
      className="w-full h-full bg-gradient-to-br from-green-700 to-red-600 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider content */}
      {sliderImages.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 flex flex-col justify-end p-8">
            <div className="max-w-md">
              <h2 className="text-white text-3xl font-bold mb-3 leading-tight">
                {slide.title}
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slider Controls */}
      <SliderControls 
        currentSlide={currentSlide} 
        totalSlides={sliderImages.length}
        onNext={nextSlide}
        onPrev={prevSlide}
        onSlideChange={setCurrentSlide}
        isPaused={isPaused}
        onPauseToggle={() => setIsPaused(!isPaused)}
      />
    </div>
  );
};

// Slider Controls Component
const SliderControls = ({ 
  currentSlide, 
  totalSlides, 
  onNext, 
  onPrev, 
  onSlideChange,
  isPaused,
  onPauseToggle 
}) => (
  <>
    {/* Navigation Buttons */}
    <button 
      onClick={onPrev}
      className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 rounded-full p-4 transition-all duration-300 backdrop-blur-sm group"
      aria-label="Previous slide"
    >
      <svg 
        className="w-6 h-6 text-white group-hover:scale-110 transition-transform" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M15 19l-7-7 7-7" 
        />
      </svg>
    </button>

    <button 
      onClick={onNext}
      className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 rounded-full p-4 transition-all duration-300 backdrop-blur-sm group"
      aria-label="Next slide"
    >
      <svg 
        className="w-6 h-6 text-white group-hover:scale-110 transition-transform" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9 5l7 7-7 7" 
        />
      </svg>
    </button>

    {/* Slide Indicators */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideChange(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentSlide 
              ? 'bg-white scale-125 shadow-lg' 
              : 'bg-white bg-opacity-50 hover:bg-opacity-75 hover:scale-110'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>

    {/* Controls Bar */}
    <div className="absolute top-6 right-6 flex items-center space-x-3">
      {/* Play/Pause Button */}
      <button
        onClick={onPauseToggle}
        className="bg-black bg-opacity-40 hover:bg-opacity-60 rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
        aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
      >
        {isPaused ? (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        ) : (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6zm8 0h4v16h-4z"/>
          </svg>
        )}
      </button>

      {/* Slide Counter */}
      <div className="bg-black bg-opacity-40 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  </>
);

export default ImageSlider;