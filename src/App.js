import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import PingPong from './pages/PingPong';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/ping-pong">Ping Pong</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/ping-pong">
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

const mapDispatchToProps = dispatch => ({dispatch});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
