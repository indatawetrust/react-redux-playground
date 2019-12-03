import {createReducer, createActions} from 'reduxsauce';
import {combineReducers} from 'redux-immer';
import produce from 'immer';

// types and actions
export const {Types, Creators} = createActions(
  {
    ping: null,
    pong: null,
    toggleStatus: null,
    changeDelay: ['delayTime'],
  },
  {},
);

// initial state
export const INITIAL_STATE = {
  stage: null,
  delayTime: 500,
};

// reducers
export const toggleStatus = state => {
  state.stage = state.stage ? null : 'ping';

  return state;
};

export const ping = state => {
  state.stage = 'ping';

  return state;
};

export const pong = state => {
  state.stage = 'pong';

  return state;
};

export const changeDelay = (state, {delayTime}) => {
  state.delayTime = delayTime;

  return state;
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TOGGLE_STATUS]: toggleStatus,
  [Types.PING]: ping,
  [Types.PONG]: pong,
  [Types.CHANGE_DELAY]: changeDelay,
});

const rootReducer = combineReducers(produce, {
  app: reducer,
});

export default rootReducer;
