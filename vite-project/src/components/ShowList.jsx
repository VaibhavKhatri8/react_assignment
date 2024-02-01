import React from "react";
import { Link } from "react-router-dom";

const ShowList = ({ shows }) => {
  // console.log(shows);
  return (
    <div className="show-list-container">
      <h1 className="show-list-title">List of Shows</h1>
      <div className="show-list">
        {shows.map(({ show }) => (
          <div key={show.id} className="show-item">
            {show.image && (
              <img
                src={show.image.medium}
                alt={show.name}
                className="movie-image"
              />
            )}
            <h2 className="movie-name">{show.name}</h2>
            {show.genres && (
              <p className="movie-genre">
                {show.genres.map((genre) => genre).join("/")}
              </p>
            )}
            <Link to={`/summary/${show.id}`}>
              <button>View Summary</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
