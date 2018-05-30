import React from 'react';
import { shallow } from 'enzyme';
import App from './components/common/App';

it('renders without crashing', () => {
  const props = {
    location: {
      pathname: 'feature/membersGrid',
    },
    toolbarTitle: 'Feature',
  };
  shallow(<App {...props} />);
});
