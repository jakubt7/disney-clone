import axios, { AxiosResponse } from "axios";

const tmdbAPI = "https://api.themoviedb.org/3";
const api_key = "2d090cd0db3ce33c4fec61c9fa16211d";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const getTrending = (): Promise<AxiosResponse> => {
  return axios.get(`${tmdbAPI}/trending/all/day?api_key=${api_key}`);
};

const getMovieByGenreId = (id: number): Promise<AxiosResponse> => {
  const movieByGenreBaseURL = `${tmdbAPI}/discover/movie?api_key=${api_key}`;
  return axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);
};

export default {
  getTrending,
  getMovieByGenreId
};
