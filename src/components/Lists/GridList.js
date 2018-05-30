import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardText,
  DataTable,
  TableHeader,
  TableRow,
  TableBody,
  TableColumn,
} from 'react-md';
import ListHeader from './ListHeader';

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
        <TableHeader>
          <TableRow selectable={false}>
            {configuration.fields.map(f => <TableColumn key={f.id} >{f.label}</TableColumn>)}
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map(dataItem => (
            <TableRow key={dataItem.Id} selectable={false}>
              {configuration.fields.map(f =>
                <TableColumn key={f.id}>{dataItem[f.code]}</TableColumn>)
              }
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
