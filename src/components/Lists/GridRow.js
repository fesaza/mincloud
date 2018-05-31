import React from 'react';
import PropTypes from 'prop-types';
import { TableColumn } from 'react-md';

const GridRow = ({ dataItem, fields }) => (
  fields.map(f =>
    <TableColumn key={f.id}>{dataItem[f.code]}</TableColumn>)
);

GridRow.propTypes = {
  fields: PropTypes.array.isRequired,
  dataItem: PropTypes.object.isRequired,
};

export default GridRow;
