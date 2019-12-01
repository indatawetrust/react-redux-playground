import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Creators } from "./reducers";
import { createSelector } from "reselect";

function App({ dispatch, stage, delay }) {
  const toggle = () => dispatch(Creators.toggleStatus());

  return (
    <div className="App">
      <div>
        <input
          type="number"
          value={delay}
          onInput={e => {
            const _delay = parseInt(e.target.value);
            dispatch(Creators.changeDelay(_delay));
          }}
        />
        <button onClick={toggle}>{stage ? "stop" : "start"}</button>
      </div>
      <div>{stage}</div>
    </div>
  );
}

const getStage = createSelector(
  state => state.app.stage,
  stage => stage
);

const getDelay = createSelector(
  state => state.app.delayTime,
  delayTime => delayTime
);

const mapStateToProps = state => {
  return {
    stage: getStage(state),
    delay: getDelay(state)
  };
};

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(App);
