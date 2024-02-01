import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ShowList from "./components/ShowList";
import ShowSummary from "./components/ShowSummary";
import MovieForm from "./components/MovieForm";
import "./style.css";

const App = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.error("Error fetching shows:", error));
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<ShowList shows={shows} />} />
          <Route path="/summary/:id" element={<ShowSummary shows={shows} />} />
          <Route path="/book/:id" element={<MovieForm shows={shows} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
