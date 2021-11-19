import { combineReducers } from 'redux';
import { ACTIONS } from './actions';

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

const rootReducer = combineReducers({
  metrics,
  selectMetric,
});

export default rootReducer;
