/* global describe expect it */
import React from 'react';
import { mount } from 'enzyme';
import { DataTable, TableBody } from 'react-md';
import GridRow from '../GridRow';

describe('test for grid rows', () => {
  const fields = [
    {
      id: '1',
      type: 'text',
      label: 'Nombre',
      code: 'Nombre',
    },
    {
      id: '2',
      type: 'text',
      label: 'Apellido',
      code: 'Apellido',
    },
  ];

  const itemActions = [
    {
      id: '4',
      type: 'text',
      label: 'add',
    },
    {
      id: '5',
      type: 'text',
      label: 'add',
    },
  ];

  const dataItem = {
    Nombre: 'felipe',
    Apellido: 'salgado',
    Telefono: '316',
  };

  it('should display dataItemRow and actions', () => {
    const Wr = () => (
      <DataTable baseId="testtablerow">
        <TableBody>
          <GridRow fields={fields} dataItem={dataItem} itemActions={itemActions} />
        </TableBody>
      </DataTable>);
    const expectedItems = <div id="Apellido">{dataItem.Apellido}</div>;
    const expectedItems2 = <div id="Nombre">{dataItem.Nombre}</div>;
    const wrapper = mount((<Wr />));
    expect(wrapper.contains(expectedItems)).toEqual(true);
    expect(wrapper.contains(expectedItems2)).toEqual(true);
    expect(wrapper.find('.actionButton').length).toEqual(4 * itemActions.length);
  });
});

