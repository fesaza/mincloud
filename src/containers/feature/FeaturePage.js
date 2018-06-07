import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import createComponentFeature from './createComponentFeature';

class FeaturePage extends PureComponent {
  static propTypes = {
    load: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { load, match } = this.props;
    // you can pass featureId via params with route (url) or via props
    // when you pass the featureId via prop is because you are using this component as a nested feature
    const { featureId } = match ? match.params : this.props;
    if (!this.props[featureId]) {
      load(featureId);
    }
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
