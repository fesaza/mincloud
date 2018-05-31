import React from 'react';
import PropTypes from 'prop-types';
import { TableHeader, TableColumn, TableRow } from 'react-md';
import labels from '../../utils/Localization';

const GridColumnHeader = ({ fields, hasActions }) => {
  const columns = hasActions ? [{ id: 'actions', label: labels.actions }, ...fields] : [...fields];
  return (
    <TableHeader>
      <TableRow selectable={false}>
        {columns.map(f =>
          <TableColumn key={f.id} >{f.label}</TableColumn>)
        }
      </TableRow>
    </TableHeader>
  );
};

GridColumnHeader.propTypes = {
  fields: PropTypes.array.isRequired,
  hasActions: PropTypes.bool.isRequired,
};


export default GridColumnHeader;
