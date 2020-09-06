import React from "react";
import { Link } from "react-router-dom";

const SavedList = (props) => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map((movie) => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    {/* ADDED FUNCTIONALITY TO HOME BUTTON */}
    <div className="home-button">
      <Link to="/">Home</Link>
    </div>
  </div>
);

export default SavedList;
