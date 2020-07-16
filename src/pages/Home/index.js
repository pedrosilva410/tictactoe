import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => (
  <main>
    <h1 className="home__title">Tic Tac Toe</h1>
    <p className="home__text">Welcome to my Tic Tac Toe.</p>
    <p className="home__text">Let's PLay? (maybe read about first)</p>
      <Link className="playButton" to="/tictactoe">
        Click me to play
      </Link>
  </main>
);

export default Home;

