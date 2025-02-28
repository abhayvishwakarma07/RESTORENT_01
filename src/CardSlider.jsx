import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { transform } from "@babel/core";

const CardSlider = () => {
  const cards = [
    { id: 1, title: "Abhinash", text: "I loved the place, location, food, atmosphere, and the wonderful staff." },
    { id: 2, title: "Vikrant", text: "Staff was very courteous and knew how to handle customers well." },
    { id: 3, title: "Naman", text: "The food here is absolutely delicious! Every dish was bursting with flavor." },
    { id: 4, title: "Mohit", text: "This is the fourth card." },
  ];

  return (
    <div className="h-auto">
      <h1 className="mx-5 text-4xl font-bold">What people say about us</h1>
      <div className="max-w-6xl py-10 mx-auto ">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}  // Autoplay जोड़ा
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="p-5 m-2 min-h-64 "
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div
                className="shadow-2xl rounded-2xl p-6 text-center bg-white hover:scale-105 min-h-56 bg-[url('/public/fgf.avif')] bg-cover bg-center m-5"
              >
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="mt-2 text-black-600">{card.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CardSlider;
