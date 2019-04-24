import { takeEvery } from 'redux-saga/effects';

import {
  GET_RECIPES_REQUEST,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_ERROR,
} from './recipeActions';
import { createSaga } from '../common/makeSaga';
import { serializeRecipeList } from './recipeSerializers';

export default function *() {
  yield takeEvery(GET_RECIPES_REQUEST, createSaga(
    'GET', 'recipes/',
    response => serializeRecipeList(response.data),
    GET_RECIPES_SUCCESS, GET_RECIPES_ERROR,
  ))
}