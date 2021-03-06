import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText } from 'react-md';
import MemberItemCard from './MemberItemCard';
import ListHeader from './ListHeader';

const CardList = ({
  items, isFetching, onFilter, configuration,
}) => (
  <Card style={{ opacity: isFetching ? 0.5 : 1 }}>
    <CardText>
      <ListHeader icon="people" onFilter={onFilter} />
      {items.map(member => <MemberItemCard key={member.Id} dataItem={member} configuration={configuration} />)}
    </CardText>
  </Card>
);

CardList.propTypes = {
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onFilter: PropTypes.func.isRequired,
  configuration: PropTypes.object.isRequired,
};

export default CardList;
