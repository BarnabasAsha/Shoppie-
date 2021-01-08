import React from 'react'
import '../styles/header.css'
import Logo from '../assets/logo.jpg'

function Header () {
    return (
        <header className="header">
            <section className="banner" role="banner">
                <img src={Logo} alt="Shoppies" />
                Shoppies
            </section>
            <section className="hero_text">
                Nominate your favorite movies for the Shoppies Movies Award.
                <br />One of your nominated movies stands the chance of winning the Award!
            </section>
        </header>
    )
}

export default Header