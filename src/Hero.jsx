import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const images = [
  "https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=",
  "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_StpqnWoNp9FFQ2hx3lP8UN1zKTAaqVsN3A&s",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="container px-4 mx-auto mt-10">
      <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2">
        {/* Left Side - Image Slider */}
        <div className="relative w-full h-[400px] flex justify-center items-center bg-gray-200 rounded-lg overflow-hidden">
          <button onClick={prevSlide} className="absolute p-2 bg-white rounded-full shadow-md left-4">
            <ChevronLeft size={24} />
          </button>

          <img
            src={images[currentIndex]}
            alt="Food Item"
            className="object-cover w-full h-full transition-all duration-500"
          />

          <button onClick={nextSlide} className="absolute p-2 bg-white rounded-full shadow-md right-4">
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="">
            <h1 className="text-5xl font-bold">Well come too the our restorent</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas expedita dolorem saepe repellendus, nesciunt accusantium tempore dolore consectetur ad, soluta quia esse iusto adipisci sapiente!</p>
            <button className="p-2 m-2 font-bold text-white bg-yellow-500 hover:bg-yellow-600 rounded-xl">About US</button>
        </div>
        </div>
      </div>
  );
};

export default Hero;
