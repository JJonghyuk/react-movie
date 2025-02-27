import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ratingImg from "../img/icon_rating_star.png";

const MovieItem = styled.div`
  width: calc(20% - 16px);
`;

const MovieMore = styled.div`
  opacity: 0;
  transition: 0.5s;
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
`;

const MovieMoreLink = styled(Link)`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px;
  width: 80%;
  border: 1px solid #fff;
  border-radius: 10px;
  text-align: center;
  & > span {
    color: #fff;
    font-size: 16px;
  }
`;

const MoviePost = styled.div`
  overflow: hidden;
  display: flex;
  position: relative;
  border-radius: 5px;
  &:hover {
    ${MovieMore} {
      opacity: 1;
      visibility: visible;
    }
    ${MovieMoreLink} {
    }
  }
`;

const MoviePostImg = styled.img`
  width: 100%;
  height: auto;
`;

const MovieBox = styled.div`
  margin-top: 10px;
`;

const MovieTitle = styled.h2`
  overflow: hidden;
  padding: 0 20px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const MovieInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  color: #fff;
`;

const MovieYear = styled.span`
  position: relative;
  display: block;
  color: #fff;
  font-size: 14px;
`;

const MovieRating = styled(MovieYear)`
  margin-left: 10px;
  padding-left: 25px;
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 1px;
    height: 80%;
    background: #999;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    background: url(${ratingImg}) no-repeat center/100% auto;
  }
`;

function Movie({ id, coverImg, title, year, rating }) {
  return (
    <MovieItem>
      <MoviePost>
        <MoviePostImg src={coverImg} alt={title} />
        <MovieMore>
          <MovieMoreLink to={`${process.env.PUBLIC_URL}/${id}`}>
            <span>View Details</span>
          </MovieMoreLink>
        </MovieMore>
      </MoviePost>
      <MovieBox>
        <MovieTitle>{title}</MovieTitle>
        <MovieInfo>
          <MovieYear>{year}</MovieYear>
          <MovieRating>{rating}</MovieRating>
        </MovieInfo>
      </MovieBox>
    </MovieItem>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
