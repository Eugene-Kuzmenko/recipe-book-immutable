import { takeEvery } from 'redux-saga/effects';

import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_ERROR,
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
} from './itemActions';
import { createSaga } from '../common/makeSaga';

import { itemListSerializer, itemSerializer } from './itemSerializers';

export default function * () {
  yield takeEvery(GET_ITEMS_REQUEST, createSaga(
    'GET', '/items/',
    response => itemListSerializer(response.data),
    GET_ITEMS_SUCCESS, GET_ITEMS_ERROR,
  ));
  yield takeEvery(ADD_ITEM_REQUEST, createSaga(
    'POST', '/items/',
    response => itemSerializer(response.data),
    ADD_ITEM_SUCCESS, ADD_ITEM_ERROR,
  ));
}