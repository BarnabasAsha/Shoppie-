import React, { useState, useEffect } from 'react';
import List from './movieList'
import '../styles/searchBar.css'

function Search () {
    const [ input, setInput ] = useState('')
    const [ query, setQuery ] = useState('')
    const [ apiData, setApiData ] = useState([])

    useEffect( () => {
        fetch(`https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?apikey=32817f98&s=${query}`)
        .then(res => res.json())
        .then(data => {
            if (data.Response === 'True') {
                setApiData(data.Search)
                console.log(query)
            }
        })
    }, [query]) 
    
    function fetchData (e) {
        e.preventDefault()
        setQuery(input)
    }

    function handleInput (e) {
        setInput(e.target.value)
    }

    return (
        <div className="wrapper">
                <form className="search_form" onSubmit={fetchData}>
                     <input type="text" name="search" id="search" placeholder="Enter Movie title here" onChange={handleInput}/>
                     <button className="search_button" type="submit">Search</button>
               </form>

               
               <List query={query} movieData={apiData} />
               
        </div>
    )
}

// class Search extends Component {
//     constructor(props) {
//         super(props);

//         this.searchRef = React.createRef();

//         this.state = {
//             data: [],
//             query: '',
//             notFound: false
//         };
//         this.fetchData = this.fetchData.bind(this)
//     }

    // fetchData(e) {
    //     e.preventDefault()
    //     this.setState({ query: this.searchRef.current.value })
    //     fetch(`https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?apikey=32817f98&s=${this.searchRef.current.value}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.Response === 'True') {
    //                 this.setState({
    //                     data: data.Search,
    //                     notFound: false
    //                 })
    //             }
    //             else {
    //                 console.log('Movie not found')
    //                 this.setState({ notFound: true })
    //             }
    //         }).catch(error => {
    //             if (error.status === '404') {
    //                 this.setState({ notFound: true })
    //             }
    //             else this.setState({ notFound: true })
    //         })
    // }

//     render() {
//         return (
//             <div className="wrapper">
//                 <form className="search" onSubmit={this.fetchData}>
//                     <input type="text" name="search" id="search" placeholder="Enter Movie title here" ref={this.searchRef} />
//                     <button type="submit">Search</button>
//                 </form>
//                 {/* {
//                     this.state.notFound === false ? (
//                         <List array={this.state.data} query={this.state.query} />

//                     ) : (
//                             <div className="error-msg">
//                                 <h2>Error in connection try again Later</h2>
//                                 <div className="error-img">
//                                     <img src={errorImg} alt="Error in Connection" />
//                                 </div>
//                             </div>
//                         )
//                 } */}
//             </div>
//         )
//     }
// }

export default Search;