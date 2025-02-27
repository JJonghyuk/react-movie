import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import Loading from "../components/Loading";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovies] = useState();
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovies(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  });
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <MovieDetail
            coverImg={movie.large_cover_image}
            alt={movie.title}
            title={movie.title}
            year={movie.year}
            runtime={movie.runtime}
            rating={movie.rating}
            summary={movie.description_intro}
            genres={movie.genres}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
