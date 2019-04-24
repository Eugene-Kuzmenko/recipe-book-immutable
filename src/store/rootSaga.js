import { fork } from 'redux-saga/effects';

import recipe from './recipe/recipeSaga';

export default function* () {
  yield fork(recipe);
}