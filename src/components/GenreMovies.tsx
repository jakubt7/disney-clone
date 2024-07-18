import GenreList from "../constants/GenreList";
import MovieList from "../components/MovieList"

interface Genre {
  id: number;
  name: string;
}

const GenreMovies: React.FC = () => {
  return (
    <div>
      {GenreList.genre.map(
        (item: Genre, index: number) =>
          index < 4 && (
            <div key={item.id}>
              <h2 className="text=[20px] md:text-[25px] text-white font-bold p-5 px-8 md:px-16">
                {item.name}
              </h2>
              <MovieList genreId={item.id} index_={index}/>
            </div>
          )
      )}
    </div>
  );
};

export default GenreMovies;
