import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllMessages from "./components/AllMessages";
import LatestMessages from "./components/LatestMessages";
import Search from "./components/SearchBar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/messages" exact component={AllMessages} />
            <Route path="/messages/latest" component={LatestMessages} />
            <Route path="/messages/search" component={Search} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
