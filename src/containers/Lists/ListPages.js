import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * This HOC (High order component) is used to share and reuse the logic between any List view
 * This HOC load the data and admin the cache and pass to ListComponent via props
 * @param {Component | PureComponent} ListComponent
 */
const ListPages = ListComponent => class extends Component {
    static propTypes = {
      items: PropTypes.array.isRequired,
      load: PropTypes.func.isRequired,
    };

    componentDidMount() {
      if (!this.props.items.length > 0) {
        this.props.load();
      }
    }

    render() {
      return (
        <ListComponent {...this.props} />
      );
    }
};

export default ListPages;
