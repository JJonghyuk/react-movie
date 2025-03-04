import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MovieDetail from "../components/MovieDetail";
import Loading from "../components/Loading";

const Wrap = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 80px 40px 80px 40px;
  max-width: 1920px;
  min-width: 1440px;
`;

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovies] = useState();
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    const getMovie = async () => {
      setLoading(true);
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      console.log(json.data.movie);
      setMovies(json.data.movie);
      setLoading(false);
    };

    getMovie();
  }, [id]);
  return (
    <Wrap>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </Wrap>
  );
}

export default Detail;
