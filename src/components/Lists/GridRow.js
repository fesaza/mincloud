import React from 'react';
import PropTypes from 'prop-types';
import { TableColumn, TableRow } from 'react-md';
import ActionList from '../actions/ActionList';

const GridRowColumns = ({ dataItem, fields }) => (
  fields.map(f =>
    <TableColumn key={f.id}><div id={f.code}>{dataItem[f.code]}</div></TableColumn>)
);

const GridRow = ({ dataItem, fields, itemActions }) => (
  <TableRow selectable={false}>
    {itemActions.length > 0 && (
      <TableColumn>
        <ActionList actions={itemActions} />
      </TableColumn>
      )
    }
    <GridRowColumns
      dataItem={dataItem}
      fields={fields}
    />
  </TableRow>
);

GridRow.propTypes = {
  fields: PropTypes.array.isRequired,
  dataItem: PropTypes.object.isRequired,
  itemActions: PropTypes.array.isRequired,
};

export default GridRow;
