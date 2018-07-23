import React from 'react';
import styled from 'styled-components';
import { Segment, Header, Container } from 'semantic-ui-react';

const StyledSegment = styled(Segment)`
  &&& {
    min-height: 200px;
    background-color: #2c3e50;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const BigHeaderContainer = styled(Container)`
  &&& {
    z-index: 10;
  }
`;

const BigHeader = styled(Header)`
  &&& {
    font-size: ${props => props.theme.h1.fontSize};
    font-weight: ${props => props.theme.h1.fontWeight};
    letter-spacing: ${props => props.theme.h1.letterSpacing};
    z-index: 10;
  }
`;

const Banner = () => {
  return (
    <StyledSegment inverted vertical textAlign="center">
      <BigHeaderContainer>
        <BigHeader inverted as="h1">
          Combat Tracker
        </BigHeader>
      </BigHeaderContainer>
    </StyledSegment>
  );
};

export default Banner;
