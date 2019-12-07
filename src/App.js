import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PingPong from "./pages/PingPong";
import AppBar from "./components/AppBar";

function App() {
  return (
    <Router>
      <div>
        <AppBar />
        <Switch>
          <Route path="/">
            <PingPong />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(App);
