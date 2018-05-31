import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardText,
  DataTable,
  TableBody,
  TableRow,
  TableColumn,
} from 'react-md';
import ListHeader from './ListHeader';
import GridColumnHeader from './GridColumnHeader';
import GridRow from './GridRow';
import ActionList from '../actions/ActionList';

const GridList = ({
  items, isFetching, onFilter, configuration,
}) => (
  <Card style={{ opacity: isFetching ? 0.5 : 1 }}>
    <CardText>
      <ListHeader
        icon={configuration.icon}
        onFilter={onFilter}
        canFilter={configuration.canFilter}
        canAdd={configuration.canAdd}
      />
      <DataTable baseId={configuration.id}>
        <GridColumnHeader
          fields={configuration.fields}
          hasActions={configuration.itemActions.length > 0}
        />
        <TableBody>
          {items.map(dataItem => (
            <TableRow key={dataItem.Id} selectable={false}>
              {configuration.itemActions.length > 0 ? (
                <TableColumn>
                  <ActionList actions={configuration.itemActions} />
                </TableColumn>
                ) : undefined
              }
              <GridRow
                key={dataItem.id}
                dataItem={dataItem}
                itemActions={configuration.itemActions}
                fields={configuration.fields}
              />
            </TableRow>
          ))}
        </TableBody>
      </DataTable>
    </CardText>
  </Card>
);

GridList.propTypes = {
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onFilter: PropTypes.func.isRequired,
  configuration: PropTypes.object.isRequired,
};

export default GridList;
