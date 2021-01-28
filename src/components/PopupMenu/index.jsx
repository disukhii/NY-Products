import React from 'react';
import PropTypes from 'prop-types'; // вказівник
import classNames from 'classnames'; // взаємодія з класами

import './PopupMenu.scss';
// https://uk.reactjs.org/docs/hooks-reference.html#useeffect   -- тут усі Хукі які використовуються у проекті
const PopupMenu = ({ children, items, onClick, activeItem }) => {
  const [visiblePopup, setVisiblePopup] = React.useState(false);  // useState()
  const blockRef = React.useRef(null); 
  const clickOutsideCallback = React.useCallback(e => {
    if (!e.path.includes(blockRef.current)) {
      setVisiblePopup(false);
    }
  }, []);

  const handleClick = item => {
    if (onClick) {   
      onClick(item);
    }
    setVisiblePopup(false);
  };

  React.useEffect(() => {
    document.querySelector('body').addEventListener('click', clickOutsideCallback);
    return () => document.querySelector('body').removeEventListener('click', clickOutsideCallback);
  }, [clickOutsideCallback]);
// React.Фрагменти дозволяють формувати список дочірніх елементів, не створюючи зайвих вузлів в DOM
  return (
    <React.Fragment>
      <div onClick={() => setVisiblePopup(!visiblePopup)}>{children}</div>
      {visiblePopup && (
        <div ref={blockRef} className="popup-menu">
          <ul>
            {items.map((item, index) => (
              <li
                className={classNames({ active: item.value === activeItem })}
                onClick={handleClick.bind(this, item)}
                key={index}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

PopupMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};

export default PopupMenu;
