import createReducer from 'create-reducer-redux';
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
  name: 'Recipe',

  handlers: {
    onRequest: [
      GET_RECIPES_REQUEST,
    ],
    onRecipesReceived: [
      GET_RECIPES_SUCCESS,
    ]
  },

  onRequest: makeReducer.setAsLoading(),
  onRecipesReceived: makeReducer.resolveRequest('collection'),
})