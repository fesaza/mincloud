import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText } from 'react-md';
import createComponentFeature from '../feature/createComponentFeature';

const createForm = () => {
  const Form = ({ configuration, isFetching }) => {
    const ChildComponent = createComponentFeature(configuration.component);
    return (
      <Card style={{ opacity: isFetching ? 0.5 : 1 }}>
        <CardText >
          <ChildComponent />
        </CardText>
      </Card>
    );
  };

  Form.propTypes = {
    configuration: PropTypes.object.isRequired,
    isFetching: PropTypes.bool,
  };

  Form.defaultProps = {
    isFetching: false,
  };

  return Form;
};

export default createForm;
