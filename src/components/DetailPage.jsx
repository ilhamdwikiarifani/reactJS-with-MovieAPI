import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import Ads from "./Ads";

const apiKey = import.meta.env.VITE_REACT_APIKEY;
const baseUrl = import.meta.env.VITE_REACT_BASEURL;

const DetailPage = () => {
  const [viewMovie, setViewMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${baseUrl}/movie/${id}?api_key=${apiKey}`
      );
      setViewMovie(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-[1240px] mx-auto px-10 overflow-hidden mt-10">
        <div className=" block md:flex justify-start items-start overflow-hidden">
          <div className=" w-full  md:min-w-[320px] sm:max-w-[320px] sm:h-[500px] h-[550px] bg-slate-800 rounded-md">
            <img
              src={`${import.meta.env.VITE_REACT_IMGURL}/${
                viewMovie.poster_path
              }`}
              alt=""
              className="w-full h-full object-cover rounded-md border border-zinc-600"
            />
          </div>
          <div className="text-white pt-5 md:pt-0 md:px-9">
            <p className="text-2xl md:text-4xl font-bold mb-3">
              {viewMovie.title}
            </p>
            <div className="flex md:mb-2">
              <p className="">
                {viewMovie.release_date} ({viewMovie.original_language})・
              </p>
              <p>{viewMovie.runtime}m・</p>
              <div className="hidden xl:flex ">
                {viewMovie.genres &&
                  viewMovie.genres.map((datas) => {
                    return (
                      <div key={datas.id} className="pe-1">
                        {datas.name},{" "}
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="flex xl:hidden mb-2">
              {viewMovie.genres &&
                viewMovie.genres.map((datas) => {
                  return (
                    <div key={datas.id} className="pe-1">
                      {datas.name},{" "}
                    </div>
                  );
                })}
            </div>
            <div className=" bg-blue-600 flex justify-center items-center  rounded-md py-2 px-2 w-[120px] text-center mb-3">
              <p className=" font-bold leading-none px-1">
                {viewMovie.vote_average}
              </p>
              <p className="text-sm leading-none">User Score</p>
            </div>
            <p className="mb-3 text-zinc-200 italic ">' {viewMovie.tagline}</p>

            <div className="mb-4">
              <p className="font-bold text-xl">Overview</p>
              <p className=" w-full ">{viewMovie.overview}</p>
            </div>
            <div className="flex justify-start items-center">
              <div>
                <div className="mb-2">
                  <p className="font-bold text-xl">Status</p>
                  <p className="pb-2 italic">{viewMovie.status}</p>
                </div>
                <div>
                  <p className="font-bold text-xl">Popularity</p>
                  <p className="pb-2">{viewMovie.popularity}</p>
                </div>
              </div>
              <div className="px-10">
                <div className="mb-2">
                  <p className="font-bold text-xl">Budget</p>
                  <p className="pb-2">$ {viewMovie.budget}</p>
                </div>
                <div>
                  <p className="font-bold text-xl">Revenue</p>
                  <p className="pb-2"> $ {viewMovie.revenue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <pre className="text-white mt-24">
          {JSON.stringify(viewMovie, null, 1)}
        </pre> */}
        <Ads />
      </div>

      <Footer />
    </div>
  );
};

export default DetailPage;
