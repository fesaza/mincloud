import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeaturePage extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { load, match } = this.props;
    load(match.params.featureId);
  }

  render() {
    return (<div>hello</div>);
  }
}

export default FeaturePage;
