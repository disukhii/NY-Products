import React from 'react';
import PropTypes from 'prop-types'; // бібліотека, яка нам дає можливість перевіряти чи дані були правильно записані (для прикладу: чи string === string)
import classNames from 'classnames'; // бібліотека для взяємодії в JavaScript з класами html

import './Button.scss'; // витягуєм стилі

const Button = ({ children, className, outline, onClick }) => {     // функція яка приймає параметр в якому містяться змінні
  return (                                                // return повертає нам ті дані
    <button
      onClick={onClick}
      className={classNames('button', className, {            // коли нажимаєм кнопку добавити - змінюється її стиль
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
};

Button.propTypes = {               // якщо дані не будуть відповідати вказаним умовам, то propTypes буде нам про це повідомляти
  onClick: PropTypes.func,
  className: PropTypes.string,
  outline: PropTypes.bool,
};

export default Button;
