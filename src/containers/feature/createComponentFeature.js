import React from 'react';
import * as ComponentTypes from '../../models/ComponentTypes';
import List from '../Lists/MembersListPage';

function getComponent(component) {
  if (component.component) {
    return getComponent(component.component);
  }

  switch (component.type) {
    case ComponentTypes.GridList:
    case ComponentTypes.CardList:
      return (<List configuration={component} />);
    default:
      return (<div>Loaded but error: Component maybe doesn't have the type property</div>);
  }
}

const createComponentFeature = configuration => () => {
  if (!configuration || configuration.isFetching) {
    return (<div>Loading configurations and components...</div>);
  }
  return getComponent(configuration);
};

export default createComponentFeature;
