import React from 'react';
import { shallow } from 'enzyme';
import { NavigationDrawer } from 'react-md';
import App from './components/common/App';

it('renders without crashing', () => {
  const props = {
    location: {
      pathname: 'feature/membersGrid',
    },
    toolbarTitle: 'Feature',
  };
  // const toolbar = <NavigationDrawer />;
  // const wrapper =
  shallow(<App {...props} />);
  // expect(wrapper).toContainReact(toolbar);
  // expect(wrapper.find('.md-title md-title--toolbar')).to.have.length(1);
});
