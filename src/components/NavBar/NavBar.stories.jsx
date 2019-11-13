import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './NavBar';

export default {
  title: 'NavBar',
}

export const normal = () => (
  <BrowserRouter>
    <NavBar />
  </BrowserRouter>
);
