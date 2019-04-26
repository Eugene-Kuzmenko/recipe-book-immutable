import { combineReducers } from 'redux-immutable';

import recipe from './recipe/recipeReducer';
import item from './item/itemReducer';

export default combineReducers({
  recipe,
  item,
})