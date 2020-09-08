import React, { Component } from 'react';
import List from './movieList'
import '../styles/searchBar.css'
import errorImg from '../assets/error404.svg'

class Search extends Component {
    constructor(props) {
        super(props);

        this.searchRef = React.createRef();

        this.state = {
            data: [],
            query: '',
            notFound: false
        };
        this.fetchData = this.fetchData.bind(this)
    }

    fetchData(e) {
        e.preventDefault()
        this.setState({ query: this.searchRef.current.value })
        fetch(`https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?apikey=32817f98&s=${this.searchRef.current.value}`)
            .then(res => res.json())
            .then(data => {
                if (data.Response === 'True') {
                    this.setState({
                        data: data.Search,
                        notFound: false
                    })
                }
                else {
                    console.log('Movie not found')
                    this.setState({ notFound: true })
                }
            }).catch(error => {
                if (error.status === '404') {
                    this.setState({ notFound: true })
                }
                else this.setState({ notFound: true })
            })
    }

    render() {
        return (
            <div className="wrapper">
                <div className="description">
                    <h2>The Shoppies Award Is Here Again</h2>
                    <p>Nominate your favorites movies to win the award (Max of 5 nominations)</p>
                </div>
                <form className="search" onSubmit={this.fetchData}>
                    <input type="text" name="search" id="search" placeholder="Enter Movie title here" ref={this.searchRef} />
                    <span className="search-icon"><i className="fas fa-search"></i></span>
                </form>
                {
                    this.state.notFound === false ? (
                        <List array={this.state.data} query={this.state.query} />

                    ) : (
                            <div className="error-msg">
                                <h2>Error in connection try again Later</h2>
                                <div className="error-img">
                                    <img src={errorImg} alt="Error in Connection" />
                                </div>
                            </div>
                        )
                }
            </div>
        )
    }
}

export default Search;