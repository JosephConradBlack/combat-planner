import React from 'react';
import styled from 'styled-components';
import { Segment, Header, Container } from 'semantic-ui-react';

import SiteMenu from './SiteMenu';

const StyledSegment = styled(Segment)`
  &&& {
    min-height: 400px;
    padding: 1em 0em;
  }
`;

const BigHeader = styled(Header)`
  &&& {
    font-size: ${props => props.theme.h1.fontSize};
    font-weight: ${props => props.theme.h1.fontWeight};
    letter-spacing: ${props => props.theme.h1.letterSpacing};
    margin-top: 100px;
  }
`;

const Banner = () => {
  return (
    <StyledSegment inverted vertical textAlign="center">
      <SiteMenu />
      <Container>
        <BigHeader inverted as="h1">
          Combat Planner
        </BigHeader>
      </Container>
    </StyledSegment>
  );
};

export default Banner;
