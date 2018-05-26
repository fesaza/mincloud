import React from 'react';
import * as CompomentTypes from '../../models/ComponentTypes';
import List from '../Lists/MembersListPage';

const createComponentFeature = configuration => () => {
  if (!configuration || configuration.isFetching) {
    return (<div>Loading configurations and components...</div>);
  }
  const { component } = configuration;
  // if (component) {
  //   return createComponentFeature(component);
  // }

  if (component.type === CompomentTypes.GridList || component.type === CompomentTypes.CardList) {
    return (<List configuration={component} />);
  }
  return (<div>Loaded</div>);
};

export default createComponentFeature;
