import React from 'react';
import PropTypes from 'prop-types';

import { PopupMenu } from '../';

const SortPopup = ({ sortBy, onSelect }) => {
  const items = [
    { value: 'rating', label: 'Популярному' },
    { value: 'price', label: 'Ціні' },
    { value: 'name', label: 'Алфавіту' },
  ];
  const selected = items.find(obj => obj.value === sortBy);
  return (
    <div className="sort">
      <PopupMenu onClick={onSelect} activeItem={selected.value} items={items}>
        <div className="sort__label">
          <b>Сортування по:</b>
          <span>{selected.label}</span>
        </div>
      </PopupMenu>
    </div>
  );
};

SortPopup.propTypes = {
  sortBy: PropTypes.string,
  onSelect: PropTypes.func,
};

SortPopup.defaultProps = {
  sortBy: 'rating',
};

export default SortPopup;
