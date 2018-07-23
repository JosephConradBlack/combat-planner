export const ADD_FIGHTER = 'ADD_FIGHTER';
export const EDIT_FIGHTER = 'EDIT_FIGHTER';
export const CLEAR_FIGHTERS = 'CLEAR_FIGHTERS';

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

export default {
  ADD_FIGHTER,
  EDIT_FIGHTER,
  CLEAR_FIGHTERS,
  addFighter,
  editFighter,
  clearFighters
};
