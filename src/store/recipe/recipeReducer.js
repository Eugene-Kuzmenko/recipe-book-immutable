import { createReducer } from 'redux-create-reducer';
import { Map } from 'immutable';

import {
  ADD_RECIPE_REQUEST,
  ADD_RECIPE_SUCCESS,
  GET_RECIPES_REQUEST,
  GET_RECIPES_SUCCESS,
} from './recipeActions';
import makeReducer from '../common/makeReducer';

const initialState = Map({
  collection: Map(),
  isLoading: false,
  isCreating: false,
});

export default createReducer(initialState, {
  [GET_RECIPES_REQUEST]: makeReducer.raiseFlag(),
  [GET_RECIPES_SUCCESS]: makeReducer.resolveAndReplaceCollection('collection'),
  [ADD_RECIPE_REQUEST]: makeReducer.raiseFlag('isCreating'),
  [ADD_RECIPE_SUCCESS]: makeReducer.resolveAndReplaceItem('collection', 'isCreating')
})