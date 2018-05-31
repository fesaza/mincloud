import React from 'react';
import { shallow } from 'enzyme';
import GridColumnHeader from '../GridColumnHeader';

// GridColumnHeader, GridRow

describe('ActionList tests', () => {
  const itemActions = [
    {
      id: '2',
      type: 'deleteItem',
      label: 'Eliminar',
    },
    {
      id: '1',
      type: 'deleteItem',
      label: 'Eliminar',
    },
    {
      id: '1',
      type: 'deleteItem',
      label: 'Eliminar',
    },
  ];

  const fnNode = n => typeof n.type() !== 'string';

  it('should list of headers and action', () => {
    const wrapper = shallow((<GridColumnHeader fields={itemActions} hasActions />));
    expect(wrapper.findWhere(fnNode).length).toEqual(5 + itemActions.length);
  });

  it('should list of headers without action', () => {
    const wrapper = shallow((<GridColumnHeader fields={itemActions} hasActions={false} />));
    expect(wrapper.findWhere(fnNode).length).toEqual(3 + itemActions.length);
  });
});
