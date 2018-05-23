import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, Button } from 'react-md';
import MemberItemCard from './MemberItemCard';

const styleButton = { margin: '2px' };
const styleSection = { width: '100%', marginBottom: '16px' };

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
          <section style={styleSection}>
            <Button style={styleButton} floating secondary mini >person_add</Button>
            <Button style={styleButton} floating secondary mini >search</Button>
          </section>
          {items.map(member => <MemberItemCard key={member.Id} dataItem={member} />)}
        </CardText>
      </Card>
    );
  }
}

export default Members;
