import React from 'react';
import { Button } from 'react-md'; 
import { shallow } from 'enzyme';
import ActionList from '../ActionList';

// GridColumnHeader, GridRow

describe('ActionList tests', () => {
  it('should list action buttons', () => {
    const itemActions = [
      {
        id: '2',
        type: 'deleteItem',
        label: 'Eliminar',
        icon: 'delete',
        tooltipLabel: 'Delete item',
      },
      {
        id: '1',
        type: 'deleteItem',
        label: 'Eliminar',
        icon: 'delete',
        tooltipLabel: 'Delete item',
      },
    ];
    const wrapper = shallow((<ActionList actions={itemActions} />));
    expect(wrapper.findWhere(n => typeof n.type() !== 'string').length).toEqual(3);
    //expect(wrapper.find('[key=1]').length).toEqual(true);
  });

  it('shouldnt list action buttons', () => {
    const itemActions = [];
    const wrapper = shallow((<ActionList actions={itemActions} />));
    expect(wrapper.findWhere(n => typeof n.type() !== 'string').length).toEqual(0);
    //expect(wrapper.find('[key=1]').length).toEqual(true);
  });
});
