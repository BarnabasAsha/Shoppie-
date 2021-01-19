import React from "react";
import Movie from "./movie";
import "../styles/list.css";

function Nominations({ movieData }) {
  return (
    <div>
      <h2>Hey, You have made {movieData.length} nominations</h2>
      <div className="movie_list">
        {!movieData.length ? (
          <h3>You've not made any nominations so far</h3>
        ) : (
          movieData.map((movie) => {
            return (
              <Movie
                key={movie.imdbID}
                id={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                year={movie.Year}
                onClick={() => {}}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Nominations;
