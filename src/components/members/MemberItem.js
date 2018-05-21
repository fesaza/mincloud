import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'react-md';

const style = { margin: '4px 4px 14px 4px' };

const MemberItemCard = ({ member }) => (
  <Card style={style} className="md-block-centered">
    <CardTitle title={member.CECENombre} subtitle={member.Clasificacion} />
    <CardText>
      <p>
        The <code>CardText</code> component is really just useful for displaying any
        content with some additional padding.
      </p>
    </CardText>
  </Card>
);

MemberItemCard.propTypes = {
  member: PropTypes.object.isRequired,
};

export default MemberItemCard;
