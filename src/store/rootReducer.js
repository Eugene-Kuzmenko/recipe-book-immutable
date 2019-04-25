import { combineReducers } from 'redux-immutable';

import recipe from './recipe/recipeReducer';


export default combineReducers({
  recipe,
})