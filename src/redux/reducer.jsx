import { combineReducers } from 'redux';
import { ACTIONS } from './actions';

const metrics = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.GET_METRICS:
      return state;
    default: return state;
  }
};

const selectMetric = (state = '', action) => {
  switch (action.type) {
    case ACTIONS.GET_METRICS:
      return state;
    default: return state;
  }
};

const rootReducer = combineReducers({
  metrics,
  selectMetric,
});

export default rootReducer;
