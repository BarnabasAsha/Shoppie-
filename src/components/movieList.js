import React, { useState, useEffect } from "react";
import Nominations from "./nominations";
import Movie from "./movie";
import "../styles/list.css";

function List(props) {
  const movieData = props.movieData;
  const dataLength = props.movieData.length;
  const query = props.query;
  const [nominations, setNominations] = useState([]);
  const [showNominations, toggleShowNominations] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("storeNominations") === null) {
      setNominations([]);
    } else {
      setNominations(JSON.parse(localStorage.getItem("storeNominations")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("storeNominations", JSON.stringify(nominations));
  }, [nominations]);

  function handleNomination(movieID) {
    if (nominations.length < 5) {
      const nominated = movieData.filter((movie) => movie.imdbID === movieID);
      setNominations(nominations.concat(nominated));
    } else {
      alert("Sorry! You cannot exceed the nomination maximum of 5");
    }
  }

  function denominate(movieID) {
    const denominated = nominations.filter((movie) => movie.imdbID !== movieID);
    setNominations(denominated);
  }

  function handleDisability(movieID) {
    const check = (movie) => movie.imdbID === movieID;
    if (nominations.some(check)) {
      return true;
    }
  }

  return (
    <div className="movie_container">
      {showNominations ? (
        <Nominations
          movieData={nominations}
          denominate={(e) => denominate(e)}
        />
      ) : !dataLength ? (
        <h2>No movies found, Kindly search for a movie</h2>
      ) : (
        <div>
          <h2> {` ${dataLength} results for "${query}" `} </h2>

          <div className="movie_list">
            {movieData.map((movie) => {
              return (
                <Movie
                  key={movie.imdbID}
                  id={movie.imdbID}
                  title={movie.Title}
                  poster={movie.Poster}
                  year={movie.Year}
                  nominate={true}
                  disability={handleDisability(movie.imdbID)}
                  onClick={() => {
                    handleNomination(movie.imdbID);
                  }}
                />
              );
            })}
          </div>
        </div>
      )}
      <button onClick={() => toggleShowNominations(!showNominations)}>
        {showNominations ? "Back to Movie Nominations" : "Show Nominations"}
      </button>
    </div>
  );
}

// class List extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             nominations: [],
//             toggleList: false
//         }
//         this.updateNomations = this.updateNomations.bind(this)
//         this.removeNominations = this.removeNominations.bind(this)
//         this.handleDisability = this.handleDisability.bind(this)
//         this.toggleButton = this.toggleButton.bind(this)

//         this.toggleRef = React.createRef()
//     }

//     componentDidMount() {
//         if (localStorage.getItem('storeNominations') === null) {
//             this.setState({ nominations: [] })
//         } else {
//             this.setState({ nominations: JSON.parse(localStorage.getItem('storeNominations')) })
//         }
//     }

//     componentDidUpdate() {
//         localStorage.setItem('storeNominations', JSON.stringify(this.state.nominations))
//         if (this.state.nominations.length > 0) {
//             this.setState({toggleList: false})
//         }
//     }

//     updateNomations(movieID) {
//         if (this.state.nominations.length < 5) {
//             const nominated = this.props.array.filter(movie => movie.imdbID === movieID)
//             this.setState({ nominations: this.state.nominations.concat(nominated) })
//         } else {
//             console.log('Maximum of 5 nominations')
//         }
//     }

//     removeNominations(movieID) {
//         // eslint-disable-next-line array-callback-return
//         this.state.nominations.filter((movie) => {
//             if (movie.imdbID === movieID) {
//                 const nominations = this.state.nominations
//                 nominations.splice(this.state.nominations.indexOf(movie), 1)
//                this.setState({ nominations: nominations })
//             }
//         })
//     }

//     handleDisability(movieID) {
//         const check = (movie) => movie.imdbID === movieID
//         if (this.state.nominations.some(check)) {
//             return true;
//         }
//     }

//     toggleButton() {
//         if(this.state.nominations.length > 0) {
//             if(this.state.toggleList === false) {
//                 this.toggleRef.current.style.display = 'block'
//                 this.setState({toggleList: !this.state.toggleList})
//             } else {
//                 this.toggleRef.current.style.display = 'none'
//                 this.setState({toggleList: !this.state.toggleList})
//             }
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {
//                     this.state.nominations.length === 5 ? (
//                         <Banner />
//                     ) : null
//                 }
//                 <div className="container">
//                     {
//                         this.props.array.length > 0 ? (
//                             <div className="list movie-list">
//                                 <h3>
//                                     Results for "{this.props.query}"
//                                 </h3>
//                                 {
//                                     this.props.array.map((movie) => {
//                                         return <Movie key={movie.imdbID} id={movie.imdbID} title={movie.Title} poster={movie.Poster} year={movie.Year} disable={this.handleDisability(movie.imdbID)}
// onClick={(e) => {
//     this.updateNomations(e)
// }
// }
//                                             buttonType="nominate" />;
//                                     }
//                                     )
//                                 }
//                             </div>
//                         ) : (
//                             // <div className="error-message">
//                             //     Sorry this movie can't be found <br /> Try searching another movie
//                             // </div>
//                             null
//                         )
//                     }

//                     {
//                         this.state.nominations.length > 0 ? (
//                             <div className="list">
//                                 <div className="list nomination-list" ref={this.toggleRef}>
//                                     <h3>Nomination List ({this.state.nominations.length})</h3>

//                                 {
//                                     this.state.nominations.map((movie) =>
//                                         <Movie key={movie.imdbID} id={movie.imdbID} title={movie.Title} poster={movie.Poster} year={movie.Year} buttonType="remove"
//                                             onClick={(e) => this.removeNominations(e)}
//                                         />
//                                     )
//                                 }
//                             </div>
//                             </div>
//                         ) : (null)
//                     }
//                 </div>
//                 {
//                     this.state.nominations.length > 0 ? (
//                         <button className="toggle" onClick={this.toggleButton}>
//                     {
//                         this.state.toggleList === false ? (
//                             'Show Nominations'
//                         ) : (
//                             'Hide Nominations'
//                         )
//                     }
//                 </button>
//                     ) : null
//                 }
//             </div>
//         )
//     }

// }

export default List;
