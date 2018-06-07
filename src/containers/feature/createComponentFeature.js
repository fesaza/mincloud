import React from 'react';
import { Grid, Cell } from 'react-md';
import * as ComponentTypes from '../../models/ComponentTypes';
import List from '../Lists/MembersListPage';
import Form from '../forms/Form';
import { TextField, DateField, EmailField } from '../../components/formControls';

const getGrid = component => (
  <Grid key={component.id}>
    {component.components.map(c => (
      <Cell key={c.id} size={c.size}>
        {c.components.map(comp => getComponent(comp))}
      </Cell>))
    }
  </Grid>
);

const getField = (component) => {
  switch (component.fieldType) {
    case ComponentTypes.FieldTypes.TEXT:
      return (<TextField key={component.id} {...component} />);
    case ComponentTypes.FieldTypes.DATE:
      return (<DateField key={component.id} />);
    case ComponentTypes.FieldTypes.EMAIL:
      return (<EmailField key={component.id} {...component} />);
    default:
      return (<TextField key={component.id} {...component} />);
  }
};

function getComponent(component) {
  switch (component.type) {
    case ComponentTypes.GRID:
      return getGrid(component);
    case ComponentTypes.GRIDLIST:
    case ComponentTypes.CARDLIST:
      return (<List key={component.id} configuration={component} />);
    case ComponentTypes.FORM:
      return (<Form key={component.id} configuration={component} />);
    case ComponentTypes.FIELD:
      return getField(component);
    // case ComponentTypes.FEATURE_NESTED:
    //   return (<Feature featureId={component.refId} />);
    default:
      if (component.component) {
        return getComponent(component.component);
      }
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
