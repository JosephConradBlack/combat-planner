export const ADD_FIGHTER = 'ADD_FIGHTER';
export const addFighter = fighter => {
  return {
    type: ADD_FIGHTER,
    payload: fighter
  };
};

export default {
  ADD_FIGHTER,
  addFighter
};
