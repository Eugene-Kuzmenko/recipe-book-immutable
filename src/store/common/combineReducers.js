import { Map } from 'immutable';
import { compose } from 'redux';

const callReducer = (key, reducer) => state => {
  const newSubstate = reducer(state.get(key));
  if (state.get(key) !== newSubstate) {
    return state.set(newSubstate);
  }
  return state;
};

export default (reducersMap) => {
  const reducerOrder = [state => state || Map()];
  Object.entries(reducersMap).forEach(
    ([key, reducer]) => reducerOrder.push(callReducer(key, reducer)),
  );
  return compose(...reducerOrder);
};