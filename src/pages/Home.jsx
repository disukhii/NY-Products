import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
// useSelector - при його відправлені дія виконується поверхносне зрівнення минулого значення результата селектора і теперішнього.
import { PizzaBlock, Categories, SortPopup } from '../components';
import { pizzasActions, cartActions, filtersActions } from '../redux/actions';

function App() {
  const dispatch = useDispatch(); // dispatch передає збережені дані з redux і передає їх за допомогою Actions
  const [pizzas, isLoading, cartItems, filters] = useSelector(state => [
    state.pizzas.items,
    state.pizzas.isLoading,
    state.cart.items,
    state.filters,
  ]);

  const addToCart = React.useCallback(obj => dispatch(cartActions.addToCart(obj)), [dispatch]);
  const selectSort = React.useCallback(obj => dispatch(filtersActions.setSortBy(obj.value)), [
    dispatch,
  ]);
  const selectCategory = React.useCallback(
    index => {
      dispatch(filtersActions.setCategory(index));
    },
    [dispatch],
  );
  console.log(selectCategory)

  React.useEffect(() => {
    dispatch(pizzasActions.fetchItems(filters));
  }, [dispatch, filters]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
// Все що імпортовано і ретурниться з великої букви і зеленим (<Categories /> це все блоки коду (файли) які ми прописували в інших папках)
  return (
    <React.Fragment>
      <div className={classNames('content__top', { noclick: isLoading })}>
        <Categories
          activeItem={filters.category}
          items={['Усі', 'Піца', 'М\'ясні страви', 'Салати', 'Випічка', 'Вода' ]}
          onClick={selectCategory}
        />
        <SortPopup sortBy={filters.sortBy} onSelect={selectSort} />
      </div>
      <h2 className="content__title">Усі страви:</h2>
      <div className="content__items">
        {pizzas && !isLoading
          ? pizzas.map(item => (
              <PizzaBlock
                key={item.id}
                {...item}
                onAdd={addToCart}
                cartItems={cartItems}
                isLoading={isLoading}
              />
            ))
          : [...Array(8)].map((_, index) => <PizzaBlock key={index} isLoading={isLoading} />)}
      </div>
    </React.Fragment>
  );
}

export default App;
