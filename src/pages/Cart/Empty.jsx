import React from 'react';
import { Link } from 'react-router-dom';
import CartEmptyImg from '../../assets/img/empty-cart.png';

const Empty = () => {
  return (
    <React.Fragment>
      <h2>
      Корзина пуста <icon>😕</icon>
      </h2>
      <p>
        Ви нічого не добавили у корзину
        <br />
        Для того, щоб добавити продукт у корзину, перейдіть на головну сторінку.
      </p>
      <img src={CartEmptyImg} alt="Empty cart" />
      <Link to="/" class="button button--black">
        <span>Повернутись назад</span>
      </Link>
    </React.Fragment>
  );
};

export default Empty;
