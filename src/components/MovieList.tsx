import React, { useEffect, useRef, useState } from "react";
import GlobalAPI from "../services/GlobalAPI";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import MovieCardHr from "./MovieCardHr";

const screenWidth = window.innerWidth;

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

interface MovieListProps {
  genreId: number;
  index_: number;
}

const MovieList: React.FC<MovieListProps> = ({ genreId, index_ }) => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getMovieByGenreId = async () => {
      try {
        const resp = await GlobalAPI.getMovieByGenreId(genreId);
        setMovieList(resp.data.results);
      } catch (error) {
        console.error("Error fetching movies by genre", error);
      }
    };

    getMovieByGenreId();
  }, [genreId]);

  const sliderLeft = (element: HTMLDivElement | null): void => {
    if (element) {
      const scrollAmount = screenWidth - 140;
      element.scrollLeft = Math.max(0, element.scrollLeft - scrollAmount);
    }
  };

  const sliderRight = (element: HTMLDivElement | null): void => {
    if (element) {
      const scrollAmount = screenWidth - 140;
      element.scrollLeft = Math.min(
        element.scrollWidth - element.clientWidth,
        element.scrollLeft + scrollAmount
      );
    }
  };

  return (
    <div className="relative">
      <HiChevronLeft
        onClick={() => sliderLeft(elementRef.current)}
        className={`text-white text-4xl absolute left-0 ml-10 transform -translate-y-1/2 cursor-pointer hidden md:block z-10 ${index_%3===0?'top-[40%]' : 'top-1/2'}`}
      />
      <HiChevronRight
        onClick={() => sliderRight(elementRef.current)}
        className={`text-white text-4xl absolute right-0 top-1/2 mr-10 transform -translate-y-1/2 cursor-pointer hidden md:block ${index_%3===0?'top-[40%]' : 'top-1/2'} z-10`}
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto w-full px-16 scrollbar-none scroll-smooth"
      >
        <div className="flex flex-nowrap gap-8 pb-5 mx-10 pt-6">
          {movieList.map((item) => (
            <>
              {index_ % 3 == 0 ? (
                <MovieCardHr key={item.id} movie={item} />
              ) : (
                <MovieCard key={item.id} movie={item} />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
