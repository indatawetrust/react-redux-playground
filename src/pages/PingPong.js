import React from "react";
import { connect } from "react-redux";
import { Creators } from "../reducers";
import { createSelector } from "reselect";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
      direction="column"
    >
      <Grid>
        <TextField
          type="number"
          value={delay}
          onInput={e => {
            const _delay = parseInt(e.target.value);
            dispatch(Creators.changeDelay(_delay));
          }}
        />
        <Button onClick={toggle} variant="contained">
          {stage ? "stop" : "start"}
        </Button>
      </Grid>
      <Grid>
        <Typography variant="h1" component="h2" gutterBottom>
          {stage}
        </Typography>
      </Grid>
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
