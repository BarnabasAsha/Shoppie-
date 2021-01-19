import React, { useState } from "react";
import List from "./movieList";
import "../styles/searchBar.css";

function Search() {
  const [query, setQuery] = useState("");
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  function fetchData(e) {
    e.preventDefault();
    setLoading(true);
    fetch(
      `https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?apikey=32817f98&s=${query}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setLoading(false);
          setApiData(data.Search);
        }
      }, console.error);
  }

  function handleInput(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="wrapper">
      <form className="search_form" onSubmit={fetchData}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Enter Movie title here"
          onChange={handleInput}
        />
        <button className="search_button" type="submit">
          Search
        </button>
      </form>

      {loading ? (
        <h2>Fetching Movies...</h2>
      ) : (
        <List query={query} movieData={apiData} />
      )}
    </div>
  );
}

export default Search;
