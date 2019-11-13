import React from 'react';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

import createStore from '../../store';

import Recipe from './Recipe';

export default { title: 'Recipe'}

function* saga(action) {
  console.log(action);
}

const store = createStore(saga);

export const normal = () => (
  <Provider
    store={store}
  >
    <div>
      <Recipe
        name="Craft Pickaxe"
        input={fromJS({})}
        output={fromJS({})}
      />
    </div>
  </Provider>
);