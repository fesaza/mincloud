import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardList from '../../components/Lists/CardList';
import GridList from '../../components/Lists/GridList';
import * as ComponentTypes from '../../models/ComponentTypes';

/**
 * This function is a util function to easy debuggin on the component
 * @param {Coponent | PureComponent} WrappedComponent
 */
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

/**
 * This HOC (High order component) is used to share and reuse the logic between any List view
 * This HOC load the data and admin the cache and pass to ListComponent via props
 * @param {Component | PureComponent} ListComponent
 */
const createListPage = () => {
  class CreateListPage extends Component {
    static propTypes = {
      items: PropTypes.array.isRequired,
      load: PropTypes.func.isRequired,
      isFetching: PropTypes.bool.isRequired,
      onFilter: PropTypes.func.isRequired,
      configuration: PropTypes.object,
    };

    static defaultProps = {
      configuration: {},
    }

    componentDidMount() {
      if (!this.props.items.length > 0) {
        this.props.load();
      }
    }

    render() {
      const { configuration } = this.props;
      const ListComponent = configuration.type === ComponentTypes.CardList ? CardList : GridList;
      return (
        <ListComponent {...this.props} />
      );
    }
  }
  CreateListPage.displayName = `CreateListPage(${getDisplayName('dataItemList')})`;
  return CreateListPage;
};

export default createListPage;
