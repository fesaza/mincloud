import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createComponentFeature from './createComponentFeature';

class FeaturePage extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { load, match } = this.props;
    const { featureId } = match.params;
    load(featureId);
  }

  getBaseComponent = () => {
    const { match } = this.props;
    const config = this.props[match.params.featureId];
    const ChildComp = createComponentFeature(config);
    return (<ChildComp {...this.props} />);
  }

  render() {
    return this.getBaseComponent();
  }
}

export default FeaturePage;
