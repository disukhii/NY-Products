import { combineReducers } from 'redux';

import cart from './cart';
import pizzas from './pizzas';
import filters from './filters';
// тут наші всі редюсери імпортуються в один файл, для того щоб все потім можна було просто імпортнути  за допомогою "combineReducers"
export default combineReducers({
  cart,
  pizzas,
  filters,
});
