import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Segment, List } from 'semantic-ui-react';

import Fighter from './Fighter';

const StyledSegment = styled(Segment)`
  &&& {
    background-color: white;
  }
`;

const StyledContainer = styled(Container)`
  &&& {
    margin-top: 50px;
  }
`;

const getItems = items => {
  return items.map((item, index) => <Fighter key={item.id} item={item} />);
};

const FighterList = ({ items }) => {
  return (
    <StyledSegment basic>
      <StyledContainer>
        <Segment.Group>{items && getItems(items)}</Segment.Group>
      </StyledContainer>
    </StyledSegment>
  );
};

FighterList.propTypes = {
  items: PropTypes.array
};

export default FighterList;
