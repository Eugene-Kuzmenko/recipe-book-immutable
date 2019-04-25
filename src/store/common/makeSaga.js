import { get, put, call } from 'redux-saga/effects';

import adapter from './adapter';


/**
 * Creates saga handling requests
 * @param {string} method - HTTP request method
 * @param {string} url - URL request will access to
 * @param {function} url - or URL creating callback like (action: Object) => string
 * @param {function} serializer - Callback forming action payload (request: Request, action: Object) => Any
 * @param {string} successActionType - Action dispatched if request successfully resolved
 * @param {string} failureActionType - Action dispatched if error occured
 * @returns {Function} Saga
 * */

export function createSaga(method, url, serializer, successActionType, failureActionType) {
  return function* (action) {
    try {
      const response = yield call(adapter, {
        method,
        url: url instanceof Function ? url(action) : url,
        params: method === 'GET' ? action.payload : null,
        data: method !== 'GET' ? action.payload : null,
      });
      yield put({ type: successActionType, payload: serializer(response, action) });
    } catch (error) {
      console.error(error);
      yield put({ type: failureActionType, payload: error });
    }
  }
}