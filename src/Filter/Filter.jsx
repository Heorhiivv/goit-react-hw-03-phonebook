import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({value, onChangeFilter}) => {
  return (
    <div>
    <h3>Find contacts by name</h3>
    <input 
    type="text" 
    className="TaskEditor-input" 
    value={value}
    onChange={e => onChangeFilter(e.target.value)}
    />
    </div>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
};

export default Filter