import { Map, List } from 'immutable';

/**
 * Creates reducer which saves payload to the state field
 * @param {string} fieldName - name of the field where payload will be saved
 * @returns {function} Reducer
 * */

const savePayload = (fieldName) => (state, action) => state.set(fieldName, action.payload);

/**
 * Creates reducer which lowers isLoading flag and saves payload to the state field
 * @param {string} fieldName - name of the field where payload will be saved
 * @returns {function} Reducer
 * */
const resolveRequestAndSave = (fieldName) => (state, action) => state.merge({
  [fieldName]: action.payload,
  isLoading: false,
});

/**
 * Creates reducer which lowers isLoading flag
 * @param {string} fieldName - name of the field where payload will be saved
 * @returns {function} Reducer
 * */
const resolveRequest = (fieldName) => (state, action) => state.set('isLoading', false);

/**
 * Creates reducer which raises isLoading flag
 * @returns {function} Reducer
 * */
const setAsLoading = () => (state, action) => state.set('isLoading', true);

export default {
  savePayload,
  resolveRequest,
  resolveRequestAndSave,
  setAsLoading
}