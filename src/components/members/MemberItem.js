import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText, Avatar, CardActions, Button } from 'react-md';
import * as settings from '../../config';

const style = { margin: '4px 4px 14px 4px' };

const MemberItemCard = ({ member }) => {
  const urlPicture = `${settings.URL_PHOTOS}/${member.photo}`;
  return (
    <Card style={style} className="md-block-centered">
      <CardTitle
        title={member.CECENombre}
        subtitle={member.Clasificacion}
        avatar={<Avatar src={urlPicture} />}
      />
      <CardActions expander>
        <Button flat>Action 1</Button>
        <Button flat>Action 2</Button>
      </CardActions>
      <CardText expandable>
        <p>
          The <code>CardText</code> component is really just useful for displaying any
          content with some additional padding.
        </p>
      </CardText>
    </Card>
  );
};

MemberItemCard.propTypes = {
  member: PropTypes.object.isRequired,
};

export default MemberItemCard;
