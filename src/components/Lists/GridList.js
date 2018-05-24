import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, DataTable, TableHeader, TableRow, TableBody, TableColumn } from 'react-md';
import ListHeader from './ListHeader';

const GridList = ({ items, isFetching, onFilter }) => (
  <Card style={{ opacity: isFetching ? 0.5 : 1 }}>
    <CardText>
      <ListHeader icon="people" onFilter={onFilter} />
      <DataTable baseId="grid-list">
        <TableHeader>
          <TableRow selectable={false}>
            <TableColumn key="CECENombre">Nombre completo</TableColumn>
            <TableColumn key="Clasificacion">Clasificacion</TableColumn>
            <TableColumn key="Genero">Genero</TableColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map(dataItem => (
            <TableRow key={dataItem.Id} selectable={false}>
              <TableColumn>{dataItem.CECENombre}</TableColumn>
              <TableColumn>{dataItem.Clasificacion}</TableColumn>
              <TableColumn>{dataItem.Sexo}</TableColumn>
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
};

export default GridList;
