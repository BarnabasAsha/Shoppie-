import React, { useState } from "react";
import "../styles/movie.css";

function Movie(props) {
  const [nominateStatus, setNominateStatus] = useState(false);

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
            setNominateStatus(true);
            props.onClick(props.imdbID);
          }}
          disabled={nominateStatus}
        >
          {props.nominate ? "Nominate" : "Denominate"}
        </button>
      </div>
    </div>
  );
}

export default Movie;
