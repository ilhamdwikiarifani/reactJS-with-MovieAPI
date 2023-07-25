import { useState, useEffect } from "react";
import { getDataMovie, cariDataMovie } from "./API";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import Ads from "./Ads";

const Body = () => {
  const [viewMovie, setViewMovie] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getDataMovie().then((result) => {
      setViewMovie(result);
    });
  }, []);

  const searchMovie = async (q) => {
    if (q.length > 3) {
      const cari = await cariDataMovie(q);
      setViewMovie(cari.results);
    }
  };

  const TampilBody = () => {
    return (
      <Swiper
        spaceBetween={13}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          850: {
            slidesPerView: 5,
          },
        }}
      >
        {viewMovie.map((datas, i) => {
          return (
            <SwiperSlide
              className="  w-full md:w-[200px] md:h-[320px] h-[200px] bg-zinc-900 border border-zinc-600 rounded-md relative hover:scale-90 transition-all cursor-pointer"
              key={i}
              onClick={() => navigate(`/${datas.id}`)}
            >
              <div className="w-full h-full bg-gradient-to-r md:bg-gradient-to-t from-zinc-900 from-[20%] opacity-75 absolute z-10 "></div>
              <img
                src={`${import.meta.env.VITE_REACT_IMGURL}/${
                  datas.poster_path
                }`}
                alt=""
                className="w-full h-full  object-cover rounded-md "
              />
              <div className="absolute bottom-0 px-7 pb-5 z-20">
                <p className="font-bold md:text-[12px]"> {datas.title}</p>
                <p>{datas.vote_average}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  };

  return (
    <div>
      <div className="max-w-[1240px] mx-auto md:px-10 px-3 text-white mt-10">
        <div className="py-5">
          <div className="flex justify-between items-center mb-5">
            <p className="text-2xl font-bold">Populars</p>
            <input
              type="text"
              placeholder="Search"
              className="bg-zinc-900 border w-[200px] h-[35px] md:w-[350px] border-zinc-600 rounded-md px-2 placeholder:text-[12px]"
              onChange={(e) => searchMovie(e.target.value)}
            />
          </div>
          <TampilBody />
        </div>
        <Ads />
      </div>
    </div>
  );
};

export default Body;
