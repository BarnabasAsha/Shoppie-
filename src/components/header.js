import React from 'react'
import { Link } from '@reach/router'
import '../styles/header.css'

function Header () {
    return (
        <header className="header">
            <Link to="/" className="banner" role="banner">
                Shoppies
            </Link>
            <section className="hero_text">
                Nominate your favorite movies for the Shoppies Movies Award.
                <br />One of your nominated movies stands the chance of winning the Award!
            </section>
        </header>
    )
}

export default Header