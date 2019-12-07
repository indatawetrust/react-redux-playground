import React from "react";
import { connect } from "react-redux";
import { Creators } from "../reducers";
import { createSelector } from "reselect";
import Grid from "@material-ui/core/Grid";

function PingPong({ dispatch, stage, delayTime: delay }) {
  const toggle = () => dispatch(Creators.toggleStatus());

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{
        height: "calc(100vh - 64px)"
      }}
    >
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
    </Grid>
  );
}

const getData = createSelector(
  ({ app: { stage, delayTime } }) => ({ stage, delayTime }),
  data => data
);

const mapStateToProps = state => {
  return {
    ...getData(state)
  };
};

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(PingPong);
