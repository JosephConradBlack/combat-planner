import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Segment, Item, Header, Image } from 'semantic-ui-react';

import FighterIcon from './FighterIcon';
import placeholderFighter from '../assets/placeholderfighter.svg';

const HeaderContainer = styled(Item.Header)`
  &&& {
    display: inline-block;
  }
`;

const StyledPlaceholerImage = styled(Image)`
  opacity: 0.8;
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
      <StyledPlaceholerImage floated="left" src={placeholderFighter} />
    </Item.Extra>
    <HeaderContainer />
    <FighterIcon icon="heart outline" color="grey" number={null} position={1} />
    <FighterIcon icon="shield" color="grey" number={null} position={0} />
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
