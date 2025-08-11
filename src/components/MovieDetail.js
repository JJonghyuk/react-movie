import PropTypes from "prop-types";
import styled from "styled-components";
import ratingImg from "../img/icon_rating_star.png";
import runtimeImg from "../img/icon_clock_black.svg";

const Movie = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

const MovieImg = styled.div`
  display: flex;
  position: relative;
  width: 500px;
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0px;
    background: linear-gradient(to right, #141414 0%, rgba(20, 20, 20, 0) 40%);
  }
  & > img {
    width: 100%;
    height: auto;
  }
`;
const MovieBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 20px;
  width: 800px;
`;
const MovieTitle = styled.h3`
  color: #fff;
  font-size: 44px;
  font-weight: bold;
`;

const MovieInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  line-height: 1;
`;

const MovieInfoText = styled.span`
  display: block;
  position: relative;
  font-size: 22px;
  color: #fff;
  & + & {
    margin-left: 15px;
    padding-left: 45px;
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 1px;
      height: 80%;
      background: #666;
    }
  }
`;

const MovieRunTime = styled(MovieInfoText)`
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: url(${runtimeImg}) no-repeat center/100% auto;
    filter: invert(100%);
  }
`;

const MovieRating = styled(MovieInfoText)`
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: url(${ratingImg}) no-repeat center/100% auto;
  }
`;

const MovieSummary = styled.p`
  margin-top: 60px;
  font-size: 22px;
  color: #666;
`;

const MovieGenres = styled.div`
  display: flex;
  margin-top: 20px;
  & > strong {
    font-size: 20px;
    color: #fff;
  }
`;

const MovieGenresList = styled.ul`
  display: flex;
  margin-left: 10px;
  font-size: 20px;
  & > li {
    color: #666;
    & + li {
      margin-left: 5px;
    }
  }
`;

function MovieDetail({
  coverImg,
  title,
  year,
  runtime,
  rating,
  summary,
  genres,
}) {
  return (
    <Movie>
      <MovieImg>
        <img src={coverImg} alt={title} />
      </MovieImg>
      <MovieBox>
        <MovieTitle>{title}</MovieTitle>
        <MovieInfo>
          <MovieInfoText title="year">{year}</MovieInfoText>
          <MovieRunTime title="runtime">{runtime}</MovieRunTime>
          <MovieRating title="rating">{rating}</MovieRating>
        </MovieInfo>
        <MovieSummary>{summary}</MovieSummary>
        <MovieGenres>
          <strong>Genres:</strong>
          <MovieGenresList>
            {genres.map((item, index) => (
              <li key={item}>
                {item}
                {index !== genres.length - 1 && ","}
              </li>
            ))}
          </MovieGenresList>
        </MovieGenres>
      </MovieBox>
    </Movie>
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;
