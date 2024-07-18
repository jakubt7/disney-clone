import React from "react";
import { IMAGE_BASE_URL } from "../services/GlobalAPI";

interface Movie {
    backdrop_path: string;
    id: number;
    title: string;
    original_name: string;
    overview: string;
    poster_path: string;
    media_type: string;
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    vote_average: number;
    vote_count: number;
    video: boolean;
  }

interface MovieCardHrProps {
  movie: Movie;
}

const MovieCardHr: React.FC<MovieCardHrProps> = ({ movie }) => {
  return (
    <section className="hover:scale-110 transition-all ease-out duration-150">
      <img
        src={`${IMAGE_BASE_URL}/${movie.backdrop_path}`}
        alt={movie.title}
        className="w-[200px] md:w-[300px] rounded-lg hover:border-[3px] border-gray-400 gap-3 cursor-pointer shadow-xl shadow-black"
      />
      <h2 className="text-white w-[200px] md:w-[300px] font-semibold mt-2">{movie.title}</h2>
    </section>
  );
};

export default MovieCardHr;
