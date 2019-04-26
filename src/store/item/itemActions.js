export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';

export const getItemsAction = payload => ({
  type: GET_ITEMS_REQUEST, payload,
});

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_ERROR = 'ADD_ITEM_ERROR';

export const addItemAction = payload => ({
  type: ADD_ITEM_REQUEST, payload,
});

export const REMOVE_ITEM_REQUEST = 'REMOVE_ITEM_REQUEST';
export const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS';
export const REMOVE_ITEM_ERROR = 'REMOVE_ITEM_ERROR';

export const removeItemAction = id => ({
  type: REMOVE_ITEM_REQUEST, id,
});

export const EDIT_ITEM_REQUEST = 'EDIT_ITEM_REQUEST';
export const EDIT_ITEM_SUCCESS = 'EDIT_ITEM_SUCCESS';
export const EDIT_ITEM_ERROR = 'EDIT_ITEM_ERROR';

export const editItemAction = payload => ({
  type: EDIT_ITEM_REQUEST, payload,
});
