import { Map } from 'immutable';
import { compose } from 'redux';

const callReducer = (key, reducer) => (state, action = {}) => {
  const newSubstate = reducer(state.get(key), action);
  if (state.get(key) !== newSubstate) {
    return state.set(newSubstate);
  }
  return state;
};

export default (reducersMap) => {
  const reducerOrder = [];
  Object.entries(reducersMap).forEach(
    ([key, reducer]) => reducerOrder.push(callReducer(key, reducer)),
  );
  reducerOrder.push(state => state || Map());
  return compose(...reducerOrder);
};