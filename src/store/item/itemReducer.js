import { createReducer } from 'redux-create-reducer';
import { Map } from 'immutable';

import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
} from './itemActions';
import makeReducer from '../common/makeReducer';

const initialState = Map({
  collection: Map(),
  isLoading: false,
  isCreating: false,
  isRemoving: false,
  newItemID: -1,
});

export default createReducer(initialState, {
  [GET_ITEMS_REQUEST]: makeReducer.raiseFlag(),
  [GET_ITEMS_SUCCESS]: makeReducer.resolveAndReplaceCollection('collection'),
  [ADD_ITEM_REQUEST]: makeReducer.raiseFlag('isCreating'),
  [ADD_ITEM_SUCCESS]: makeReducer.resolveAndReplaceItem('collection', 'isCreating'),
  [ADD_ITEM_SUCCESS]: (state, action) => {
    const itemID = action.payload.get('ID');
    return state
      .setIn(['collection', itemID], action.payload)
      .set('isLoading', false)
      .set('newItemID', itemID)
  }
});
