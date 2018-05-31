import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardText,
  DataTable,
  TableBody,
} from 'react-md';
import ListHeader from './ListHeader';
import GridColumnHeader from './GridColumnHeader';
import GridRow from './GridRow';

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
            <GridRow
              key={dataItem.Id}
              dataItem={dataItem}
              fields={configuration.fields}
              itemActions={configuration.itemActions}
            />
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
