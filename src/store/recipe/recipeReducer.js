import { createReducer } from 'redux-create-reducer';
import { Map } from 'immutable';

import {
  GET_RECIPES_REQUEST,
  GET_RECIPES_SUCCESS,
} from './recipeActions';
import makeReducer from '../common/makeReducer';

const initialState = Map({
  collection: Map(),
  isLoading: false,
});

export default createReducer(initialState, {
  [GET_RECIPES_REQUEST]: makeReducer.setAsLoading(),
  [GET_RECIPES_SUCCESS]: makeReducer.resolveRequestAndSave('collection'),
})