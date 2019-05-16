import { createReducer } from 'redux-create-reducer';
import { Map } from 'immutable';

import {
  ADD_RECIPE_REQUEST,
  ADD_RECIPE_SUCCESS,
  GET_RECIPES_REQUEST,
  GET_RECIPES_SUCCESS,
  REMOVE_RECIPE_REQUEST,
  REMOVE_RECIPE_SUCCESS,
  EDIT_INGREDIENT_REQUEST,
  EDIT_INGREDIENT_SUCCESS,
  ADD_INGREDIENT_REQUEST,
  ADD_INGREDIENT_SUCCESS,
  REMOVE_INGREDIENT_REQUEST,
  REMOVE_INGREDIENT_SUCCESS,
} from './recipeActions';
import makeReducer from '../common/makeReducer';

const initialState = Map({
  collection: Map(),
  isLoading: false,
  isCreating: false,
  isRemoving: false,
});

export default createReducer(initialState, {
  [GET_RECIPES_REQUEST]: makeReducer.raiseFlag(),
  [GET_RECIPES_SUCCESS]: makeReducer.resolveAndReplaceCollection('collection'),
  [ADD_RECIPE_REQUEST]: makeReducer.raiseFlag('isCreating'),
  [ADD_RECIPE_SUCCESS]: makeReducer.resolveAndReplaceItem('collection', 'isCreating'),
  [REMOVE_RECIPE_REQUEST]: makeReducer.raiseFlag('isRemoving'),
  [REMOVE_RECIPE_SUCCESS]: makeReducer.resolveAndDeleteItem('collection', 'isRemoving'),
  [EDIT_INGREDIENT_REQUEST]: makeReducer.raiseFlag(),
  [EDIT_INGREDIENT_SUCCESS]: makeReducer.resolveAndReplaceAtKeyPath(),
  [ADD_INGREDIENT_REQUEST]: makeReducer.raiseFlag(),
  [ADD_INGREDIENT_SUCCESS]: makeReducer.resolveAndReplaceAtKeyPath(),
  [REMOVE_INGREDIENT_REQUEST]: makeReducer.raiseFlag(),

  [REMOVE_INGREDIENT_SUCCESS]: (state, action) => {
    const itemID = action.payload;
    const collection = state.get('collection');

    let itemType = 'input';
    let recipeWithItem = recipe => recipe.get(itemType).has(itemID);
    let recipeID = collection.findKey(recipeWithItem);

    if (!recipeID) {
      itemType = 'output';
      recipeID = collection.findKey(recipeWithItem);
    }

    return state
      .removeIn(['collection', recipeID, itemType, itemID])
      .set('isLoading', false)
  }
})