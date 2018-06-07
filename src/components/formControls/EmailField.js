import React from 'react';
import PropTypes from 'prop-types';
import { TextField, FontIcon } from 'react-md';

const EmailField = ({ textProperties }) => (
  <TextField
    {...textProperties}
    leftIcon={<FontIcon>phone</FontIcon>}
  />
);

EmailField.propTypes = {
  textProperties: PropTypes.object.isRequired,
};

export default EmailField;
