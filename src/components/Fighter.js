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
    {item.health && (
      <FighterIcon
        icon="heart outline"
        color="red"
        number={item.health}
        position={1}
      />
    )}
    {item.armor && (
      <FighterIcon
        icon="shield"
        color="grey"
        number={item.armor}
        position={0}
      />
    )}
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

const Fighter = ({ className, index, item }) => {
  return (
    <Segment className={className}>
      <Item>{item ? getFighter(index, item) : getEmptyFighter()}</Item>
    </Segment>
  );
};

Fighter.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object
};

export default Fighter;
