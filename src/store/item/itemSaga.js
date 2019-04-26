import { takeEvery } from 'redux-saga/effects';

import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_ERROR,
} from './itemActions';
import { createSaga } from '../common/makeSaga';

import { itemListSerializer } from './itemSerializers';

export default function * () {
  yield takeEvery(GET_ITEMS_REQUEST, createSaga(
    'GET', '/items/',
    response => itemListSerializer(response.data),
    GET_ITEMS_SUCCESS, GET_ITEMS_ERROR,
  ))
}