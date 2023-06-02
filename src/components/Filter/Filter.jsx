import React from 'react';
import PropTypes from 'prop-types';
import css from '../Style/filter.module.css';
import css_n from '../Style/form.module.css';

const Filter = ({ value, changeFilter }) => {
  return (
    <label>
      <span className={css.filter_input}>Find contacts by name</span>
      
      <input
        className={css_n.input_style}
        type="text"
        value={value}
        onChange={event => changeFilter(event.target.value)}
      ></input>
    </label>
  );
};

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Filter;
