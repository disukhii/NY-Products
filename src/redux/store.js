import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
/*
 Redux-Thunk використовують для асинхроних запросів до зовнішнього API,
 для отримання або збереження даних. Redux-Thunk дозволяє легко диспатчити 
 події які слідкують життєвим циклом запросу до API */
import rootReducer from './reducers';

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; // compose утиліта яка дозволяє добавити розширення в браузер
                                          // Редюкс девтулс це розширення яким я перевіряв в хромі чи зберігаються дані в редюксі
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
// applyMiddleware - обертає наш діспатч з даними для взаємодії з ним
// createStore - тримає повний стан нашого сайту і його усіх елементів (може бути тільки одним стором в сайті)
export default store;
