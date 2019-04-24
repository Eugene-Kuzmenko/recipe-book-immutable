import axios from 'axios';

import { baseURL } from '../../config.json';

export default axios.create({
  baseURL,
  headers: {
    'content-type': 'application/json'
  }
});