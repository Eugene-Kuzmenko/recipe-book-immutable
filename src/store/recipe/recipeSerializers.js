import { Map } from 'immutable';

const serializeRecipeItem = recipeItem => Map({
  ID: recipeItem.id,
  itemID: recipeItem.item_id,
  name: recipeItem.item_name,
  qty: recipeItem.qty,
});

const outOnly = (output, recipeItem) => (
  recipeItem.is_result
    ? output.set(recipeItem.id, serializeRecipeItem(recipeItem))
    : output
);

const inOnly = (input, recipeItem) => (
  recipeItem.is_result
    ? input
    : input.set(recipeItem.id, serializeRecipeItem(recipeItem))
);

export const serializeRecipe = recipe => Map({
  name: recipe.name,
  ID: recipe.id,
  input: recipe.items.reduce(inOnly, Map()),
  output: recipe.items.reduce(outOnly, Map()),
});

const recipeListReducer = (collection, recipe) => collection.set(recipe.id, serializeRecipe(recipe));

export const serializeRecipeList = list => list.reduce(recipeListReducer, Map());