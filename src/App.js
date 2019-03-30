import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch }  from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./containers/Home";
import Details from './containers/Details';
import Discover from './containers/Discover';
import Favorites from './containers/Favorites';

import Header from './components/Header';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
class App extends Component {
  render() {
    return (
      <Router>
        <div id="site-content">
          <Header />
          <main className="main-content">
                <div className="container">
                  <Switch>
                      <Route exact path="/" component={ Home } />
                      <Route path="/discover" component={ Discover } />
                      <Route path="/favorites" component={ Favorites } />
                      <Route path="/details/:mediaType/:mediaId" component={ Details } />
                      <Route component={ PageNotFound } />
                  </Switch>
                </div>
                <ToastContainer autoClose={2000} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
