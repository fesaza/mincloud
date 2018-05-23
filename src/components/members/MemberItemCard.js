import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText, Avatar, CardActions, Button } from 'react-md';
import * as settings from '../../config';
import SubTitle from './SubTitle';
import DataItemDetail from './DataItemDetail';
import labels from '../../utils/Localization';

const style = { margin: '4px 4px 12px 4px' };

const MemberItemCard = ({ dataItem }) => {
  const urlPicture = `${settings.URL_PHOTOS}/${dataItem.photo}`;
  const direction = `${labels.address}: ${dataItem.Direccion.split(':').pop().split('"')[1]}`;
  const tel = `${labels.phone}: ${dataItem.Telefono ? dataItem.Telefono : ''}`;
  const email = `${labels.email}: ${dataItem.Correo ? dataItem.Correo : ''}`;
  return (
    <Card style={style}>
      <CardTitle
        title={dataItem.CECENombre}
        subtitle={<SubTitle fields={[direction, tel, email]} />}
        avatar={<Avatar src={urlPicture} />}
      />
      <CardActions expander >
        <Button flat secondary >Editar</Button>
        <Button flat secondary >Eliminar</Button>
      </CardActions>
      <CardText expandable>
        <DataItemDetail dataItem={dataItem} />
      </CardText>
    </Card>
  );
};

MemberItemCard.propTypes = {
  dataItem: PropTypes.object.isRequired,
};

export default MemberItemCard;
