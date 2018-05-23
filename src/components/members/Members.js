import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardText } from 'react-md';
import MemberItemCard from './MemberItemCard';
import { ListHeader } from '../common';

class Members extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    load: PropTypes.func.isRequired,
  };

  componentDidMount() {
    if (!this.props.items.length > 0) {
      this.props.load();
    }
  }

  render() {
    const { items, isFetching } = this.props;
    return (
      <Card style={{ opacity: isFetching ? 0.5 : 1 }}>
        <CardText>
          <ListHeader icon="people" />
          {items.map(member => <MemberItemCard key={member.Id} dataItem={member} />)}
        </CardText>
      </Card>
    );
  }
}

export default Members;
