import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'react-md';

const DateField = ({ config, value }) => {
  const val = value ?
    new Date(parseInt(value.replace('/Date(', '').replace(')/', ''), 0)) : value;
  return (
    <DatePicker
      label={config.label}
      value={val}
      disabled={config.disabled}
      id={config.fieldId}
      name={config.fieldId}
    />
  );
};

DateField.propTypes = {
  config: PropTypes.object.isRequired,
  value: PropTypes.string,
};

DateField.defaultProps = {
  value: null,
};

export default DateField;
