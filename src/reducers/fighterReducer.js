import { ADD_FIGHTER } from '../actions/fighterActions';

const initialState = {
  ids: [],
  fighters: {}
};

const fighterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FIGHTER:
      // Define model id client-side as we are not hitting a server
      action.payload.id = Date.now();

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
