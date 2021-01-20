import React from "react";
import "../styles/movie.css";

function Movie(props) {
  return (
    <div className="movie">
      <div className="poster">
        <img src={props.poster} alt="" />
      </div>
      <div className="description">
        <h3>
          {props.title} ({props.year})
        </h3>
        <button
          onClick={() => {
            props.onClick(props.imdbID);
          }}
          disabled={props.disablility}
        >
          {props.nominate ? "Nominate" : "Denominate"}
        </button>
      </div>
    </div>
  );
}

export default Movie;
