import React from 'react';
import PropTypes from 'prop-types';

import './Categories.scss';

const Categories = ({ activeItem, items, onClick }) => {
  return (
    <div className="categories"> 
      <ul>
        {items.map((item, index) => ( // map - це колекція яка містить "key" і "value" і створює типу нового масиву, параметри map(параметр) ---
        // --- map пробігається по масиву змінюючи дані які вписані в меп функції і записуючи ті нові дані в новий створений масив з ключем і значенням
         
        /*
        Метод bind() створює нову функцію, яка в момент виклику має певне присвоєне значення this ,
         а також задану послідовність аргументів, що передують будь-яким аргументам, переданим під час виклику нової функції. */
        
        <li
            onClick={onClick.bind(this, index)}
            key={index}
            className={activeItem === index ? 'active' : ''}> 
            {item}
          </li>
        // при кліку ми робимо className="active" тобто його стиль міняється (можете перевірити видаливши "active")
        ))}
      </ul>
    </div>
  );
};

Categories.propTypes = {
  activeItem: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
};

export default Categories;
