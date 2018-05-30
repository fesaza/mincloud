// @flow
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import { toTitle } from './utils/Utils';
// import labels from './utils/Localization';
import AppPage from './components/common/App';
import './App.css';

class App extends PureComponent {
  static propTypes = {
    location: PropTypes.object.isRequired,
    toolbarTitle: PropTypes.string.isRequired,
  };

  render = () => {
    const { toolbarTitle, location } = this.props;
    return (
      <AppPage toolbarTitle={toolbarTitle || location.pathname} location={location} />
    );
  }
}

const mapStateToProps = (state) => {
  const { config } = state;
  return {
    toolbarTitle: config.toolbarTitle,
  };
};

export default connect(mapStateToProps)(withRouter(App));
