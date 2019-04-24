export const ADD_RECIPE_REQUEST = 'ADD_RECIPE_REQUEST';
export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS';
export const ADD_RECIPE_ERROR = 'ADD_RECIPE_ERROR';

export const addRecipeAction = payload => ({
  type: ADD_RECIPE_REQUEST, payload,
});

export const ADD_INGREDIENT_REQUEST = 'ADD_INGREDIENT_REQUEST';
export const ADD_INGREDIENT_SUCCESS = 'ADD_INGREDIENT_SUCCESS';
export const ADD_INGREDIENT_ERROR = 'ADD_INGREDIENT_ERROR';

export const addIngredientAction = payload => ({
  type: ADD_INGREDIENT_REQUEST, payload,
});

export const REMOVE_INGREDIENT_REQUEST = 'REMOVE_INGREDIENT_REQUEST';
export const REMOVE_INGREDIENT_SUCCESS = 'REMOVE_INGREDIENT_SUCCESS';
export const REMOVE_INGREDIENT_ERROR = 'REMOVE_INGREDIENT_ERROR';

export const removeIngredientAction = id => ({
  type: REMOVE_INGREDIENT_REQUEST, id,
});

export const REMOVE_RECIPE_REQUEST = 'REMOVE_RECIPE_REQUEST';
export const REMOVE_RECIPE_SUCCESS = 'REMOVE_RECIPE_SUCCESS';
export const REMOVE_RECIPE_ERROR = 'REMOVE_RECIPE_ERROR';

export const removeRecipeAction = id => ({
  type: REMOVE_RECIPE_REQUEST, id,
});

export const GET_RECIPES_REQUEST = 'GET_RECIPES_REQUEST';
export const GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS';
export const GET_RECIPES_ERROR = 'GET_RECIPES_ERROR';

export const getRecipesAction = payload => ({
  type: GET_RECIPES_REQUEST, payload,
});