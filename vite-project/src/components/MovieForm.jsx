import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieForm = ({ shows }) => {
  const { id } = useParams();
  const show = shows.find((show) => show.show.id === parseInt(id));
  //   console.log(show);
  const [formData, setFormData] = useState({
    name: show ? show.show.name : "",
    // Add more relevant details from the show if needed
    // For example: venue, time, etc.
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log("Form submitted with data:", formData);
    // Optionally, we can clear the form and close it after submission
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-form">
      <h1 className="movie-form__title">Movie Ticket Booking</h1>
      <form className="movie-form__form" onSubmit={handleSubmit}>
        <label className="movie-form__label">
          Name:
          <input
            className="movie-form__input"
            type="text"
            value={formData.name}
            onChange={handleChange}
            readOnly
          />
        </label>
        {/* Add more form fields here for other details */}
        <button className="movie-form__submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MovieForm;
