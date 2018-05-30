import React from 'react';
import { shallow } from 'enzyme';
import ListHeader from '../ListHeader';

describe('Test list Header', () => {
  it('should display add button and filter', () => {
    const props = {
      onFilter: jest.fn(),
      canAdd: true,
      canFilter: true,
      icon: 'people',
    };
    const wrapper = shallow((<ListHeader {...props} />));
    expect(wrapper.contains('add_circle_outline')).toEqual(true);
    expect(wrapper.findWhere(n => typeof n.type() !== 'string').length).toEqual(10);
  });

  it('should not display add button and filter textbox', () => {
    const props = {
      onFilter: jest.fn(),
      canAdd: false,
      canFilter: false,
      icon: 'people',
    };
    const wrapper = shallow((<ListHeader {...props} />));
    expect(wrapper.contains('add_circle_outline')).toEqual(false);
    expect(wrapper.findWhere(n => typeof n.type() !== 'string').length).toEqual(7);
    //expect(wrapper.contains('search')).toEqual(false);
  });
});

