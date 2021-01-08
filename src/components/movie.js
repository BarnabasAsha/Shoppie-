import React, { useState } from 'react';
import '../styles/movie.css'


function Movie (props) {

    const [ nominateStatus, setNominateStatus ] = useState(false)
    
    function nominateMovie () {
        setNominateStatus(!nominateStatus)
    }

    function showDescription (e) {
        console.log(e)
    }

    return (
        <div className="movie">
            <div className="poster"><img src={props.poster} alt="" /></div>
            <div className="description" onMouseOver={showDescription}>
            <h3>{props.title} ({props.year})</h3>
            <button onClick={() => {
                nominateMovie()
                props.onClick(props.imdbID)
            }} disabled={nominateStatus} >Nominate</button>
            </div>
        </div>
    )
}

export default Movie;