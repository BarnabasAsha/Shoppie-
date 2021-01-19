import React from 'react'
import { Link } from '@reach/router'
import '../styles/procedures.css'
import checkmark from '../assets/checkmark.png'

function Procedure () {
    return (
        <section className="procedures">
            <h2>Steps to nominating your movie</h2>
            <ul>
                <li> 
                    <span className="checkmark"><img src={checkmark} alt="" /></span>
                    Search for your favorite movie
                </li>
                <li>
                    <span className="checkmark"><img src={checkmark} alt="" /></span>
                    Click the nominate button for your movie
                </li>
                <li>
                    <span className="checkmark"><img src={checkmark} alt="" /></span>
                    Toggle the nomination list to view your nominations
                </li>
                <li>
                    <span className="checkmark"><img src={checkmark} alt="" /></span>
                    Your nominations is restricted to five entries
                </li>

            </ul>
            <button className="button">
                <Link to="/nominate">Proceed to Nominations</Link>
            </button>
        </section>
    )
}

export default Procedure