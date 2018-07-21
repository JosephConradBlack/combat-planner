import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Segment, Item, Header, Image, Responsive } from 'semantic-ui-react';

import FighterIcon from './FighterIcon';
import NounIcon from './NounIcon';
import placeholderFighter from '../assets/placeholderfighter.svg';

const HeaderContainer = styled(Item.Header)`
  &&& {
    display: inline-block;
  }
`;

const HeaderContainerWithEllipsis = styled(HeaderContainer)`
  @media only screen and (max-width: 500px) {
    width: 170px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const StyledPlaceholerImage = styled(Image)`
  opacity: 0.8;
`;

const getFighter = (index, item) => (
  <Item.Content>
    <Item.Extra>
      {item.initiative && (
        <React.Fragment>
          <NounIcon src="/icon_sword.svg" floated="left" />
          <Header floated="left">{item.initiative}</Header>
        </React.Fragment>
      )}
    </Item.Extra>
    <HeaderContainerWithEllipsis>{item.name}</HeaderContainerWithEllipsis>
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

const StyledResponsive = styled(Responsive)`
  &&& {
    display: inline;
  }
`;
const getEmptyFighter = () => (
  <Item.Content>
    <Item.Extra>
      <StyledPlaceholerImage floated="left" src={placeholderFighter} />
    </Item.Extra>
    <HeaderContainer />
    <StyledResponsive minWidth={600}>
      <FighterIcon
        icon="heart outline"
        color="grey"
        number={null}
        position={1}
      />
      <FighterIcon icon="shield" color="grey" number={null} position={0} />
    </StyledResponsive>
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
