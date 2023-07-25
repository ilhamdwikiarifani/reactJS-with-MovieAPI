import axios from "axios";

const apiKey = import.meta.env.VITE_REACT_APIKEY;
const baseUrl = import.meta.env.VITE_REACT_BASEURL;

export const getDataMovie = async () => {
  const { data } = await axios.get(
    `${baseUrl}/movie/popular?page=1&api_key=${apiKey}`
  );
  return data.results;
};

export const cariDataMovie = async (q) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`
  );
  return search.data;
};
