
import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, TextField, Grid, Cell, FontIcon } from 'react-md';
import DateField from '../common/formControls/DateField';

const DataItemDetail = ({ dataItem }) => (
  <Grid>
    <Cell size={6}>
      <TextField
        id="Clasificacion"
        label="Clasificación"
        defaultValue={dataItem.Clasificacion}
        disabled
        leftIcon={<FontIcon>class</FontIcon>}
      />
      <DateField
        config={{ label: 'Fecha creación', fieldId: 'FechaCreacion', disabled: true }}
        value={dataItem.CreatedDate}
      />
      <DateField
        config={{ label: 'Fecha ingreso', fieldId: 'FechaIngreso', disabled: true }}
        value={dataItem.FechaIngreso}
      />
      <TextField
        id="Genero"
        label="Genero"
        leftIcon={<FontIcon>wc</FontIcon>}
        defaultValue={dataItem.Sexo}
        disabled
      />
    </Cell>
    <Cell size={6}>
      <Checkbox
        style={{ marginTop: '19px' }}
        label="Bautizado"
        checked={dataItem.EsBautizado}
        value={dataItem.EsBautizado}
        disabled
        id="clasificacion"
        name="clasificacion"
      />
      <DateField
        config={{ label: 'Fecha bautismo', fieldId: 'FechaBautismo', disabled: true }}
        value={dataItem.FechaBautismo}
      />
      <TextField
        id="RedSocial"
        label="Red social"
        leftIcon={<FontIcon>group</FontIcon>}
        defaultValue={dataItem.RedSocial}
        disabled
      />
      <TextField
        id="Peticiones"
        label="Peticiones"
        leftIcon={<FontIcon>favorite</FontIcon>}
        defaultValue={dataItem.Peticiones}
        disabled
      />
    </Cell>
  </Grid>
);

DataItemDetail.propTypes = {
  dataItem: PropTypes.object.isRequired,
};

export default DataItemDetail;
