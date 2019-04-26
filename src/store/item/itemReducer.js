import { createReducer } from 'redux-create-reducer';
import { Map } from 'immutable';

import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
} from './itemActions';
import makeReducer from '../common/makeReducer';

const initialState = Map({
  collection: Map(),
  isLoading: false,
  isCreating: false,
  isRemoving: false,
});

export default createReducer(initialState, {
  [GET_ITEMS_REQUEST]: makeReducer.raiseFlag(),
  [GET_ITEMS_SUCCESS]: makeReducer.resolveAndReplaceCollection('collection')
});
