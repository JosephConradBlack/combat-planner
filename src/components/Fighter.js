import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Segment, Item, Header, Icon } from 'semantic-ui-react';

import TextIcon from './TextIcon';

const HeaderContainer = styled(Item.Header)`
  &&& {
    display: inline-block;
  }
`;

const IconWrapper = styled(Item.Extra)`
  &&& {
    display: inline-block;
    position: absolute;
    right: 0;
    margin-right: 5px;
  }
`;

const StyledIcon = styled(TextIcon)`
  &&& {
    position: relative;
  }
`;

const getFighter = (index, item) => (
  <Item.Content>
    <Item.Extra>
      <Header floated="left">{index + 1}</Header>
    </Item.Extra>
    <HeaderContainer>{item.name}</HeaderContainer>
    <IconWrapper>
      <StyledIcon />
    </IconWrapper>
  </Item.Content>
);

const getEmptyFighter = () => (
  <Item.Content>
    <Item.Header />
    <Item.Header />
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
