import { useState, useEffect } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import MovieList from "../components/MovieList";

const Wrap = styled.div`
  overflow: hidden;
  margin: 0 auto;
`;

const Inner = styled(Wrap)`
  padding: 80px 40px;
  max-width: 1920px;
  min-width: 1440px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px 20px;
`;

function Home({ headerState }) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [moviePage, setMoviePage] = useState(1); // 현재 페이지 상태 추가
  const IS_ACTIVE = "isActive";

  const getMovies = async (page = 1) => {
    setLoading(true);
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?sort_by=like_count&page=${page}`,
      )
    ).json();
    if (json.data && json.data.movies) {
      console.log(json.data.movies);
      setMovies(json.data.movies);
    } else {
      console.warn("영화 정보를 찾을 수 없습니다.");
    }
    setLoading(false);
  };

  useEffect(() => {
    getMovies(moviePage);
    headerState(IS_ACTIVE);
  }, [moviePage, headerState]);

  return (
    <Wrap>
      {loading ? (
        <Loading />
      ) : (
        <Inner>
          <Box>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                coverImg={movie.large_cover_image}
                title={movie.title}
                rating={movie.rating}
              />
            ))}
          </Box>
          <MovieList moviePage={setMoviePage} movieIndex={moviePage} />
        </Inner>
      )}
    </Wrap>
  );
}

export default Home;
