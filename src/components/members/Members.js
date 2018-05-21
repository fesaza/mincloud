import React from 'react';
import PropTypes from 'prop-types';
import MemberItem from './MemberItem';

const Members = ({ items }) => (
  <div>
    {items.map(member => <MemberItem key={member.Id} member={member} />)}
  </div>
);

Members.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Members;
