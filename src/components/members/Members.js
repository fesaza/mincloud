import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText, Button } from 'react-md';
import MemberItem from './MemberItem';
import labels from '../../utils/Localization';

const styleButton = { marginLeft: 'auto' };

const Members = ({ items }) => (
  <Card>
    <CardTitle
      title={
        (
          <div>
            {labels.membersTitle}
            <Button style={styleButton} floating secondary mini >person_add</Button>
          </div>
        )
      }
    />
    <CardText>
      {items.map(member => <MemberItem key={member.Id} member={member} />)}
    </CardText>
  </Card>
);

Members.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Members;
