import { takeEvery } from 'redux-saga/effects';

import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_ERROR,
} from './itemActions';
import makeSaga from '../common/makeSaga';

export default function * () {
  takeEvery(GET_ITEMS_REQUEST)
}