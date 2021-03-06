import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '../';
import {} from '../Categories/index'
import './PizzaBlock.scss';

const PizzaBlock = ({ id, imageUrl, name, types, sizes, price, cartItems, onAdd, isLoading, category}, price2, categoryes) => {
  categoryes = 0
  // 
  const typeNames = ['тонка', 'корка з сосискою'];
  const availableSizes = [26, 30, 40];
  const addedCount = cartItems[id] ? cartItems[id].length : 0;
  categoryes = category + 0
  const [size, setSize] = React.useState(availableSizes[0]); // useState() - size зміниться тільки при виконанні функції setSize, availableSizes[0] - вказали індекс з якого масиву будуть братись дефолтні дані
  const [type, setType] = React.useState(0); // useState()

  const onAddClick = () => {
    const obj = {
      id,
      size,
      type,
      price,
      category
    };
    if (onAdd) {
      onAdd(obj);
    }
    return category
  };
  

  const SelectorForCategory = (value) => { // функція яка визначає чи належить продукт 1-й категорії, щоб рендерити блок з вибором (розмір піци, з коркою чи тонка)
    let category = (value) => {
      if (value === 1) {
       return( <div className="pizza-block__selector">
      <ul>
        {typeNames.map((curType, curIndex, qe) => (
          <li
            key={curIndex}
            onClick={() => setType(curIndex)}
            className={classNames({
              active: curIndex === type,
              disabled: !types.includes(curIndex),
            })}>
            {curType}
          </li>
        ))}
      </ul>
      <ul>
        {availableSizes.map((curSize, curIndex) => (
          <li
            key={curIndex}
            onClick={() => setSize(curSize)}
            className={classNames({
              active: curSize === size,
              disabled: !sizes.includes(curSize),
            })}>
            {curSize} см.
          </li>
        ))}
      </ul>
    </div>)
      }  else {
        return (<div className="other-product"></div>)
      }

    }
    return (
    category(value)
    
    )
  }
  // зміна ціни призміні розміру
 price2 = 0
  if (size === 26) {
   price2 = price
  }
 else if (size === 30) {
  price2 = price + 26
 } else if (size === 40) {
     price2 = price + 63
 } 
 
  return (
    
    <div className={classNames('pizza-block', { 'pizza-block--loading': isLoading })}>
      <div className="pizza-block__image">
        <img src={imageUrl} alt="Pizza" />
      </div>
      <h4 className="pizza-block__title">{name}</h4>
      
      {SelectorForCategory(category)}
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{price2} гривень</div>
        <Button onClick={onAddClick} className="button--add" outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"></path>
          </svg>
          <span>В корзину</span>
          {addedCount > 0 && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  );
};

PizzaBlock.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.oneOf([26, 30, 40])),
  price: PropTypes.number,
  cartItems: PropTypes.object,
  onAdd: PropTypes.func,
  isLoading: PropTypes.bool,
};

PizzaBlock.defaultProps = {
  addedToCart: 0,
  price: 0,
  sizes: [],
  types: [],
  name: '',
  imageUrl: '',
  id: 0,
  cartItems: {},
};

export default PizzaBlock;
