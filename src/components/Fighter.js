import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Segment, Item, Header } from 'semantic-ui-react';

import FighterIcon from './FighterIcon';

const HeaderContainer = styled(Item.Header)`
  &&& {
    display: inline-block;
  }
`;

const getFighter = (index, item) => (
  <Item.Content>
    <Item.Extra>
      <Header floated="left">{index + 1}</Header>
    </Item.Extra>
    <HeaderContainer>{item.name}</HeaderContainer>
    <FighterIcon icon="heart outline" color="red" position={1} />
    <FighterIcon icon="shield" color="grey" position={0} />
  </Item.Content>
);

const getEmptyFighter = () => (
  <Item.Content>
    <Item.Extra>
      <Header floated="left" />
    </Item.Extra>
    <HeaderContainer />
  </Item.Content>
);

const Fighter = ({ index, item }) => {
  return (
    <Segment>
      <Item>{item ? getFighter(index, item) : getEmptyFighter()}</Item>
    </Segment>
  );
};

Fighter.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object
};

export default Fighter;
