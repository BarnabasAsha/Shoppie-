import React, { Component } from 'react';
import '../styles/movie.css'

class Movie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieList: this.props,
            nominatedList: this.props,
            nominated: undefined,
            disabled: undefined
        }
        this.nominate = this.nominate.bind(this)
    }

    nominate() {
        this.setState({disabled: true, nominate: true})
    }


    render() {
        return (
            <div className="movie">
                <div className="poster"><img src={this.props.poster} alt="" /></div>
                <div className="description">
                <h3>{this.props.title} ({this.props.year})</h3>
                {
                    this.props.buttonType === 'nominate' ? (
                        <button disabled={this.props.disable} onClick={(e) => {
                            this.nominate()
                            this.props.onClick(this.props.id)
                        }}
                        >+ Nominate</button>
                    ) : (
                        <button onClick={(e) => {
                            this.setState({disabled: false, nominate: false})
                            this.props.onClick(this.props.id)
                        }}>
                            - Remove
                        </button>
                    )
                }
                </div>
            </div>
        )
    }
    
}

export default Movie;