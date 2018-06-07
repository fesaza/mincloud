import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, FontIcon, Grid, Cell } from 'react-md';
import labels from '../../utils/Localization';

const styleButton = { margin: '2px' };
const styleHeaderIcon = { textAlign: 'center' };

const ListHeader = ({
  icon, onFilter, canFilter, canAdd,
}) => (
  <Grid >
    <Cell size={1} style={styleHeaderIcon}>
      <FontIcon style={{ fontSize: '40px' }}>{icon}</FontIcon>
    </Cell>
    <Cell size={9}>
      {canFilter &&
      (<TextField
        id="filterCards"
        name="filterCards"
        leftIcon={<FontIcon>search</FontIcon>}
        placeholder={labels.filter}
        onChange={onFilter}
      />)
      }
    </Cell>
    <Cell size={1} />
    <Cell size={1}>
      {canAdd && (
        <Button
          tooltipLabel={labels.addItem}
          style={styleButton}
          floating
          secondary
          mini
        >
          add_circle_outline
        </Button>)}
    </Cell>
  </Grid>
);

ListHeader.propTypes = {
  icon: PropTypes.string,
  onFilter: PropTypes.func.isRequired,
  canFilter: PropTypes.bool,
  canAdd: PropTypes.bool,
};

ListHeader.defaultProps = {
  icon: 'list',
  canFilter: true,
  canAdd: true,
};

export default ListHeader;
