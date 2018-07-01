import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Item, List } from 'semantic-ui-react';

const Fighter = props => {
  return (
    <Segment>
      <Item>
        <Item.Content>
          <Item.Header>1</Item.Header>
          <Item.Header>Fighter Name</Item.Header>
        </Item.Content>
      </Item>
    </Segment>
  );
};

Fighter.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object
};

export default Fighter;
