import React from 'react';
import Banner from '../components/Banner';
import FighterList from '../components/FighterList';

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

const CombatPlannerContainer = () => {
  return (
    <div>
      <Banner />
      <FighterList items={fighters} />
    </div>
  );
};

export default CombatPlannerContainer;
