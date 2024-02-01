import React from "react";
import { useParams, Link } from "react-router-dom";

const ShowSummary = ({ shows }) => {
  // console.log(shows);
  const { id } = useParams();
  const show = shows.find((show) => show.show.id === parseInt(id));
  if (!show) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="show-summary">
      {show.show.image && (
        <img
          src={show.show.image.medium}
          alt={show.name}
          className="show-image"
        />
      )}
      <div className="show-details">
        <h1 className="show-name">{show.show.name}</h1>
        <p className="movie-summary">{show.show.summary}</p>
        <Link to={`/book/${show.show.id}`}>
          <button className="book-button">Book Ticket</button>
        </Link>
      </div>
    </div>
  );
};

export default ShowSummary;
