import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

class NavBar extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <nav className="nav-bar">
        <NavLink
          to="recipe"
          className="nav-link"
          activeClassName="nav-link active"
        >
          Recipes
        </NavLink>
        <NavLink
          to="chain"
          className="nav-link"
          activeClassName="nav-link active"
        >
          Chain
        </NavLink>
      </nav>
    );
  }
}

export default NavBar;
