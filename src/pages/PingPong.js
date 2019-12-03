import React from 'react';
import {connect} from 'react-redux';
import {Creators} from '../reducers';
import {createSelector} from 'reselect';

function PingPong({dispatch, stage, delayTime: delay}) {
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
        <button onClick={toggle}>{stage ? 'stop' : 'start'}</button>
      </div>
      <div>{stage}</div>
    </div>
  );
}

const getData = createSelector(
  ({app: {stage, delayTime}}) => ({stage, delayTime}),
  data => data,
);

const getDelay = createSelector(
  state => state.app.delayTime,
  delayTime => delayTime,
);

const mapStateToProps = state => {
  return {
    ...getData(state),
  };
};

const mapDispatchToProps = dispatch => ({dispatch});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PingPong);
