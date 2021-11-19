import { combineReducers } from 'redux';

export const ACTIONS = {
  GET_METRICS: 'GET_METRICS',
  SET_METRICS: 'SET_METRICS',
  SET_DATES: 'SET_DATES',
  GET_INFO: 'GET_INFO',
};

const metrics = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.GET_METRICS:
      return action.payload;
    default: return state;
  }
};

const selectMetric = (state = 'None', action) => {
  switch (action.type) {
    case ACTIONS.SET_METRICS:
      return action.payload;
    default: return state;
  }
};

const dates = (state = [null, null], action) => {
  switch (action.type) {
    case ACTIONS.SET_DATES:
      return action.payload;
    default: return state;
  }
};
const info = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.GET_INFO:
      return action.payload;
    default: return state;
  }
};
const rootReducer = combineReducers({
  metrics,
  selectMetric,
  dates,
  info,
});

export default rootReducer;
