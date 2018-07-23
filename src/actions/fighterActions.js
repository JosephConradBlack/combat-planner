export const ADD_FIGHTER = 'ADD_FIGHTER';
export const EDIT_FIGHTER = 'EDIT_FIGHTER';
export const CLEAR_FIGHTERS = 'CLEAR_FIGHTERS';
export const NEXT_FIGHTER = 'NEXT_FIGHTER';

export const addFighter = fighter => {
  return {
    type: ADD_FIGHTER,
    payload: fighter
  };
};

export const editFighter = fighter => {
  return {
    type: EDIT_FIGHTER,
    payload: fighter
  };
};

export const clearFighters = () => {
  return {
    type: CLEAR_FIGHTERS
  };
};

export const nextFighter = () => {
  return {
    type: NEXT_FIGHTER
  };
};

export default {
  ADD_FIGHTER,
  EDIT_FIGHTER,
  CLEAR_FIGHTERS,
  NEXT_FIGHTER,
  addFighter,
  editFighter,
  clearFighters,
  nextFighter
};
