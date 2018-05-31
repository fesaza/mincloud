import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-md';

const ActionList = ({ actions }) => (
  <div>
    {actions.map(action =>
    (
      <Button
        key={action.id}
        className="actionButton"
        flat
        secondary
        tooltipLabel={action.tooltipLabel}
        iconChildren={action.icon}
      >
        {action.label}
      </Button>
    ))
  }
  </div>
);

ActionList.propTypes = {
  actions: PropTypes.array.isRequired,
};

export default ActionList;
