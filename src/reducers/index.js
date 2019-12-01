import { combineReducers } from "redux";
import { createReducer, createActions } from "reduxsauce";

// types and actions
export const { Types, Creators } = createActions(
  {
    ping: null,
    pong: null,
    toggleStatus: null,
    changeDelay: ["delayTime"]
  },
  {}
);

// initial state
export const INITIAL_STATE = {
  stage: null,
  delayTime: 500
};

// reducers
export const toggleStatus = state => {
  return { ...state, stage: state.stage ? null : "ping" };
};

export const ping = state => {
  return { ...state, stage: "ping" };
};

export const pong = state => {
  return { ...state, stage: "pong" };
};

export const changeDelay = (state, { delayTime }) => {
  return { ...state, delayTime };
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TOGGLE_STATUS]: toggleStatus,
  [Types.PING]: ping,
  [Types.PONG]: pong,
  [Types.CHANGE_DELAY]: changeDelay
});

const rootReducer = combineReducers({
  app: reducer
});

export default rootReducer;
