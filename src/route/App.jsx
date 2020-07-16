import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import TicTacToe from "../pages/TicTacToe";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tictactoe" component={TicTacToe} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
