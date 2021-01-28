import produce from 'immer';
import { Types } from '../actions/pizzas';

const initState = {
  items: null,
  isLoading: false,
  error: null,
};
// Реалізація прогрузки товару, якщо поставити повільний інтернет загрузки сторінки(в браузері можна),
// буде видно що викликається skelet бібліотека ы буде видно сірі іконки(наш товар), реалізовано для того, щоб покупець бачив шо шось грузить і товар є
export default (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case Types.SET_ITEMS:
        draft.items = action.payload;
        draft.isLoading = false;
        break;
      case Types.LOADING:
        draft.isLoading = true;
        break;
      case Types.LOADED:
        draft.isLoading = false;
        break;
      case Types.ERROR:
        draft.isLoading = false;
        draft.error = action.payload;
        break;
      default:
    }
  });
};
