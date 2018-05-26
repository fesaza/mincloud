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
      onFilterAction: PropTypes.func.isRequired,
      configuration: PropTypes.object,
    };

    static defaultProps = {
      configuration: {},
    }

    componentDidMount() {
      if (!this.props.items.length > 0) {
        const { configuration } = this.props;
        this.props.load(configuration.dataSource);
      }
    }

    getOnFilter = () => (
      (filter) => {
        const filterExpression = `substringof('${filter}', CECENombre)`;
        const ds = { ...this.props.configuration.dataSource };
        ds.filter = filterExpression;
        this.props.onFilterAction(ds);
      }
    )

    render() {
      const { configuration } = this.props;
      const ListComponent = configuration.type === ComponentTypes.CardList ? CardList : GridList;
      return (
        <ListComponent {...this.props} onFilter={this.getOnFilter()} />
      );
    }
  }
  CreateListPage.displayName = `CreateListPage(${getDisplayName('dataItemList')})`;
  return CreateListPage;
};

export default createListPage;
