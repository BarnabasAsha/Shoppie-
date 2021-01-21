import React from "react";
import { Link } from "@reach/router";
import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="banner" role="banner">
        Shoppies
      </Link>

      <section className="hero">
        <section className="hero_text">
          Nominate your favorite movies for the Shoppies Movies Award.
          <br />
          One of your nominated movies stands the chance of winning the Award!
        </section>
        <div className="hero_grid">
          <div className="box box-1"></div>
          <div className="box box-2"></div>
          <div className="box box-3"></div>
          <div className="box box-4"></div>
        </div>
      </section>
    </header>
  );
}

export default Header;
