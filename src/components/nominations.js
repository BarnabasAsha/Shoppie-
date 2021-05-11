import React from "react";
import Movie from "./movie";
import "../styles/list.css";

function Nominations({ movieData, denominate, toggleNominations, showNominations }) {
  return (
    <div className="nominations_wrapper">
      <button className="list_btn" onClick={() => toggleNominations(!showNominations)}>Go back to List</button>
      <h4>Hey, You have made {movieData.length} nominations</h4>
      <div className="movie_list">
        {!movieData.length ? (
          <p>Go back and nominate a movie</p>
        ) : (
          movieData.map((movie) => {
            return (
              <Movie
                key={movie.imdbID}
                id={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                year={movie.Year}
                onClick={() => {
                  denominate(movie.imdbID);
                }}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default Nominations;
