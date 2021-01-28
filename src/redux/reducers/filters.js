import produce from 'immer';
import { Types } from '../actions/filters';

const initState = {
  category: 0,
  sortBy: 'rating',
};
// Тут записана умова switch яка виконує саме сортування по категоріям нашого товару (Піци, М'ясні страви і т.д)
// ще тут э умова по сортування за популярністю
// також в нас є редюсер який приймає стейт як наш обьєкт в якому буде наша категорія і рейтинг і подія - яка буде їх змінювати (виконуватись)
export default (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case Types.SET_CATEGORY:
        draft.category = action.payload;
        break;
      case Types.SET_SORT_BY:
        draft.sortBy = action.payload;
        break;
      case Types.SET_FILTERS:
        draft.category = action.payload.category;
        draft.sortBy = action.payload.sortBy;
        break;
      default:
    }
  });
};
