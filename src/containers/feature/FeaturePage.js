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
    // you can pass featureId via params with route (url) or via props
    // todo: pending for validate nesting features, currently is causing infinite loop
    const { featureId } = match ? match.params : this.props;
    load(featureId);
  }

  getBaseComponent = () => {
    const { match } = this.props;
    const { featureId } = match ? match.params : this.props;
    const config = this.props[featureId];
    const ChildComp = createComponentFeature(config);
    return (<ChildComp {...this.props} />);
  }

  render() {
    return this.getBaseComponent();
  }
}

export default FeaturePage;
