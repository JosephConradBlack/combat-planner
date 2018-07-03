import { ADD_FIGHTER } from '../actions/fighterActions';

const initialState = {
  ids: [],
  fighters: {}
};

const fighterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FIGHTER:
      return {
        ids: [...state.ids, action.payload.id],
        fighters: {
          ...state.fighters,
          [action.payload.id]: action.payload
        }
      };
    default:
      return state;
  }
};

export default fighterReducer;
