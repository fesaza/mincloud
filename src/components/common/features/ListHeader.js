import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, FontIcon, Grid, Cell } from 'react-md';
import labels from '../../../utils/Localization';

const styleButton = { margin: '2px' };
const styleHeaderIcon = { textAlign: 'center' };

const ListHeader = ({ icon }) => (
  <Grid >
    <Cell size={1} style={styleHeaderIcon}>
      <FontIcon style={{ fontSize: '40px' }}>{icon}</FontIcon>
    </Cell>
    <Cell size={9}>
      <TextField
        id="filterCards"
        name="filterCards"
        leftIcon={<FontIcon>search</FontIcon>}
        placeholder={labels.filter}
      />
    </Cell>
    <Cell size={1} />
    <Cell size={1}>
      <Button tooltipLabel={labels.addItem} style={styleButton} floating secondary mini >
        person_add
      </Button>
    </Cell>
  </Grid>
);

ListHeader.propTypes = {
  icon: PropTypes.string,
};

ListHeader.defaultProps = {
  icon: 'list',
};

export default ListHeader;
