import { useState, useEffect } from "react";
import { getDataMovie } from "./API";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const [heroView, getHeroView] = useState([]);

  useEffect(() => {
    getDataMovie().then((result) => {
      getHeroView(result);
    });
  }, []);

  const TampilHero = () => {
    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[Autoplay, EffectCreative]}
      >
        {heroView
          .filter((datas) => datas.vote_average > 8)
          .map((datas) => {
            return (
              <SwiperSlide
                className="w-full h-[230px] md:h-[440px] bg-zinc-900 border border-zinc-600 rounded-md relative flex overflow-hidden"
                key={datas.id}
              >
                <div className="w-full h-full bg-gradient-to-r md:bg-gradient-to-t from-zinc-900 from-[30%] opacity-90 absolute z-20 "></div>
                <img
                  src={`${import.meta.env.VITE_REACT_IMGURL}/${
                    datas.backdrop_path
                  }`}
                  alt=""
                  className="w-full h-full object-cover rounded-md absolute"
                />
                <div className="absolute bottom-0 px-8 pb-10 md:px-10 md:pb-10 z-20">
                  <p className="font-bold text-[16px] md:text-3xl mb-2">
                    {datas.title}
                  </p>
                  <p className=" text-[13px] md:text-md mb-3">
                    🎖️{datas.vote_average} ・ ⌛{datas.release_date}
                  </p>
                  <p className="w-auto hidden md:block text-sm h-auto md:pb-5">
                    {datas.overview.substring(0, 250)}...
                  </p>
                  <Link
                    to={`/${datas.id}`}
                    className="md:px-8 px-5 text-sm py-1 md:py-2 bg-zinc-9500 border border-zinc-700 rounded-md hover:bg-zinc-200 hover:text-black  transition-all duration-500"
                  >
                    Overview
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    );
  };

  return (
    <div className="w-full bg-zinc-900 py-12">
      <div className="text-white max-w-[1240px] mx-auto md:px-10 px-3">
        <TampilHero />
      </div>
    </div>
  );
};

export default Hero;
