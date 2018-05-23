import React from 'react';
import PropTypes from 'prop-types';

const SubTitle = ({ fields }) => (
  <div>
    { fields.filter(item => item.split(':')[1].trim()).join(', ')}
  </div>
);

SubTitle.propTypes = {
  fields: PropTypes.array.isRequired,
};

export default SubTitle;
