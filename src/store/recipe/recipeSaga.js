import { takeEvery } from 'redux-saga/effects';
import {
  GET_RECIPES_REQUEST,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_ERROR,
  ADD_RECIPE_REQUEST,
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_ERROR,
  EDIT_INGREDIENT_REQUEST,
  EDIT_INGREDIENT_SUCCESS,
  EDIT_INGREDIENT_ERROR,
  ADD_INGREDIENT_REQUEST,
  ADD_INGREDIENT_SUCCESS,
  ADD_INGREDIENT_ERROR,
  REMOVE_INGREDIENT_REQUEST,
  REMOVE_INGREDIENT_SUCCESS,
  REMOVE_INGREDIENT_ERROR,

  REMOVE_RECIPE_REQUEST,
  REMOVE_RECIPE_SUCCESS,
  REMOVE_RECIPE_ERROR,
} from './recipeActions';
import { createSaga } from '../common/makeSaga';
import {
  serializeRecipeList,
  serializeRecipe,
  serializeRecipeItem,
} from './recipeSerializers';

const saveRecipeItemSerializer = (response, action) => ({
  keyPath: [
    'collection',
    response.data.recipe_id,
    response.data.is_result ? 'output' : 'input',
    response.data.id,
  ],
  value: serializeRecipeItem(response.data)
});

export default function *() {
  yield takeEvery(GET_RECIPES_REQUEST, createSaga(
    'GET', '/recipes/',
    response => serializeRecipeList(response.data),
    GET_RECIPES_SUCCESS, GET_RECIPES_ERROR,
  ));
  yield takeEvery(ADD_RECIPE_REQUEST, createSaga(
    'POST', '/recipes/',
    response => serializeRecipe(response.data),
    ADD_RECIPE_SUCCESS, ADD_RECIPE_ERROR
  ));
  yield takeEvery(REMOVE_RECIPE_REQUEST, createSaga(
    'DELETE', (action) => `/recipes/${action.id}/`,
    (response, action) => action.id,
    REMOVE_RECIPE_SUCCESS, REMOVE_RECIPE_ERROR
  ));
  yield takeEvery(EDIT_INGREDIENT_REQUEST, createSaga(
    'PATCH', (action) => `/recipe-items/${action.payload.id}/`,
    saveRecipeItemSerializer,
    EDIT_INGREDIENT_SUCCESS, EDIT_INGREDIENT_ERROR
  ));
  yield takeEvery(ADD_INGREDIENT_REQUEST, createSaga(
    'POST', (action) => `/recipe-items/`,
    saveRecipeItemSerializer,
    ADD_INGREDIENT_SUCCESS, ADD_INGREDIENT_ERROR
  ));
  yield takeEvery(REMOVE_INGREDIENT_REQUEST, createSaga(
    'DELETE', (action) => `/recipe-items/${action.id}`,
    (response, action) => action.id,
    REMOVE_INGREDIENT_SUCCESS, REMOVE_INGREDIENT_ERROR
  ));
}