export const ADD_FIGHTER = 'ADD_FIGHTER';
export const EDIT_FIGHTER = 'EDIT_FIGHTER';

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

export default {
  ADD_FIGHTER,
  EDIT_FIGHTER,
  addFighter,
  editFighter
};
