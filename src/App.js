import React, { PureComponent, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import './App.css';
import { NavBar } from './components';
import createStore from './store';
import { Recipes, Chain } from './routes';

const store = createStore();

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <NavBar />
            <Switch>
              <Route path="recipe" component={Recipes} />
              <Route path="chain" component={Chain} />
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
