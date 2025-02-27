import { useState, useEffect } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import Header from "../components/Header";

const Wrap = styled.div`
  overflow: hidden;
  margin: 0 auto;
  padding: 80px 20px;
  max-width: 1440px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px 20px;
`;

function Home() {
  const [loading, setLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    // const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
    // const json = await response.json();
    const json = await (
      await fetch("https://yts.mx/api/v2/list_movies.json?sort_by=like_count")
    ).json();
    if (json.data && json.data.movies) {
      console.log(json.data.movies);
      setMovies(json.data.movies);
    } else {
      console.warn("영화 정보를 찾을 수 없습니다.");
    }
    // setMovies(json.boxOfficeResult.dailyBoxOfficeList);
    setLoading(false);
    setIsActive(true);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {isActive ? <Header isActive={"isActive"} /> : <Header />}
      {loading ? (
        <Loading />
      ) : (
        <Wrap>
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
        </Wrap>
      )}
    </div>
  );
}

export default Home;
