import React from 'react';
import styled from 'styled-components';
import { Container, Segment } from 'semantic-ui-react';

import Banner from '../components/Banner';
import FighterList from '../components/FighterList';

import FighterEditableFormContainer from './FighterEditableFormContainer';
// import FighterEditableForm from '../components/FighterEditableForm';

const fighters = [
  {
    id: 1,
    name: 'Player 1'
  },
  {
    id: 2,
    name: 'Player 2'
  },
  {
    id: 3,
    name: 'Orc 1'
  },
  {
    id: 4,
    name: 'Goblin 1'
  },
  {
    id: 5,
    name: 'Goblin 1'
  },
  {
    id: 6,
    name: 'Goblin 1'
  },
  {
    id: 7,
    name: 'Goblin 1'
  },
  {
    id: 8,
    name: 'Goblin 1'
  },
  {
    id: 9,
    name: 'Goblin 1'
  },
  {
    id: 10,
    name: 'Goblin 1'
  },
  {
    id: 11,
    name: 'Goblin 1'
  }
];

const StyledSegment = styled(Segment)`
  &&& {
    background-color: white;
  }
`;

const StyledContainer = styled(Container)`
  &&& {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

const CombatPlannerContainer = () => {
  return (
    <div>
      <Banner />
      <StyledSegment basic>
        <StyledContainer>
          <FighterList items={fighters} />
          <FighterEditableFormContainer />
        </StyledContainer>
      </StyledSegment>
    </div>
  );
};

export default CombatPlannerContainer;
