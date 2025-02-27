import PropTypes from "prop-types";

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
    <div>
      <img src={coverImg} alt={title} />
      <h3>{title}</h3>
      <div>
        <span>{year}</span>
        <span>{runtime}</span>
        <span>{rating}</span>
      </div>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;
