import {
  ADD_FIGHTER,
  EDIT_FIGHTER,
  CLEAR_FIGHTERS
} from '../actions/fighterActions';

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
    case EDIT_FIGHTER:
      return {
        ids: state.ids,
        fighters: {
          ...state.fighters,
          [action.payload.id]: action.payload
        }
      };
    case CLEAR_FIGHTERS:
      return {
        ids: [],
        fighters: {}
      };
    default:
      return state;
  }
};

export default fighterReducer;
