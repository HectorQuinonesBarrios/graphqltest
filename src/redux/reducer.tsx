import { combineReducers } from 'redux';
import { ACTIONS } from './actions';

const metrics = (state = [], action: { type: string }) => {
  switch (action.type) {
    case ACTIONS.GET_METRICS:
      return state;
    default: return state;
  }
};

const setMetric = (state = '', action: { type: string }) => {
  switch (action.type) {
    case ACTIONS.GET_METRICS:
      return state;
    default: return state;
  }
};

const rootReducer = combineReducers({
  metrics,
  setMetric,
});

export default rootReducer;
