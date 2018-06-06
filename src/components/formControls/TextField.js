import React from 'react';
import PropTypes from 'prop-types';
import { TextField as TextFieldMD } from 'react-md';

const TextField = ({ textProperties }) => (
  <TextFieldMD
    {...textProperties}
  />
);

TextField.propTypes = {
  textProperties: PropTypes.object.isRequired,
};

export default TextField;
