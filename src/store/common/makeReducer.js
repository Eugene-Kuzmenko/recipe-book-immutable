/**
 * Creates reducer which saves payload to the state field
 * @param {string} fieldName - name of the field where payload will be saved
 * @returns {function} Reducer
 * */
const savePayload = (fieldName) => (state, action) => (
  state.set(fieldName, action.payload)
);


/**
 * Creates reducer which lowers isLoading flag and saves payload to the state field
 * @param {string} fieldName - name of the field where payload will be saved
 * @param {string} flagName - name of the flag, which is lowered by this action
 * @returns {function} Reducer
 * */
const resolveAndReplaceCollection = (fieldName, flagName='isLoading') => (state, action) => state.merge({
  [fieldName]: action.payload,
  [flagName]: false,
});


/**
 * Creates reducer which lowers isLoading flag
 * @param {string} flagName - name of the flag, which is lowered by this action
 * @returns {function} Reducer
 * */
const resolveRequest = (flagName='isLoading') => (state, action) => (
  state.set(flagName, false)
);


/**
 * Creates reducer which raises flag
 * @param {string} flagName - name of the flag, which is raised by this action
 * @returns {function} Reducer
 * */
const raiseFlag = (flagName='isLoading') => (state, action) => (
  state.set(flagName, true)
);


/**
 * Creates reducer which replaces item in the collection with same id as the item replacing it
 * and lowers the flag
 * @param {string} fieldName - name of the field where collection is
 * @param {string} flagName - name of the flag, which is lowered by this action
 * @returns {function} Reducer
 * */
const resolveAndReplaceItem = (fieldName, flagName='isLoading') => (state, action) => (
  state
    .setIn([fieldName, action.payload.get('ID')], action.payload)
    .set(flagName, false)
);


/**
 * Creates reducer which removes item with id provided in payload
 * and lowers the flag
 * @param {string} fieldName - name of the field where collection is
 * @param {string} flagName - name of the flag, which is lowered by this action
 * @returns {function} Reducer
 * */
const resolveAndDeleteItem = (fieldName, flagName='isLoading') => (state, action) => (
  state.removeIn([fieldName, action.payload]).set(flagName, false)
);

export default {
  savePayload,
  resolveRequest,
  resolveAndReplaceCollection,
  resolveAndReplaceItem,
  resolveAndDeleteItem,
  raiseFlag
}