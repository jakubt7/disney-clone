import { useEffect, useState, useRef } from "react";
import GlobalAPI, { IMAGE_BASE_URL } from "../services/GlobalAPI";
import { AxiosResponse } from "axios";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
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

const Slider: React.FC = () => {
  const [trendingMovieList, setTrendingMovieList] = useState<Movie[]>([]);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = (): void => {
    GlobalAPI.getTrending()
      .then((resp: AxiosResponse<{ results: Movie[] }>) => {
        setTrendingMovieList(resp.data.results);
      })
      .catch((error) => {
        console.error("Error fetching trending movies:", error);
      });
  };

  const sliderLeft = (element: HTMLDivElement | null): void => {
    if (element) {
      element.scrollLeft -= screenWidth - 140;
    }
  };

  const sliderRight = (element: HTMLDivElement | null): void => {
    if (element) {
      element.scrollLeft += screenWidth - 140;
    }
  };

  return (
    <div>
      <HiChevronLeft
        onClick={() => sliderLeft(elementRef.current)}
        className="text-white text-[40px] absolute mx-8 mt-[225px] cursor-pointer hidden md:block"
      />
      <HiChevronRight
        onClick={() => sliderRight(elementRef.current)}
        className="text-white text-[40px] absolute mx-8 right-0 mt-[225px] cursor-pointer hidden md:block"
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
      >
        {trendingMovieList.map((item) => (
          <img
            key={item.id}
            src={`${IMAGE_BASE_URL}${item.backdrop_path}`}
            alt={item.title}
            className="min-w-full md:h-[450px] object-cover mr-5 object-left-top rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-out"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
