import { takeEvery } from 'redux-saga/effects';
import {
  GET_RECIPES_REQUEST,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_ERROR,
  ADD_RECIPE_REQUEST,
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_ERROR,
} from './recipeActions';
import { createSaga } from '../common/makeSaga';
import {
  serializeRecipeList,
  serializeRecipe,
} from './recipeSerializers';

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

}