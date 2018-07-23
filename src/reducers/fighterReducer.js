import _ from 'lodash';
import {
  ADD_FIGHTER,
  EDIT_FIGHTER,
  CLEAR_FIGHTERS,
  NEXT_FIGHTER
} from '../actions/fighterActions';

const initialState = {
  ids: [],
  sortedIds: [],
  fighters: {}
};

function safeInitiative(fighter) {
  if (fighter.initiative === null || fighter.initiative === undefined) return 0;
  return _.toNumber(fighter.initiative);
}

function indexOfMinDiffInitiative(sortedIds, fighters, newFighter) {
  let diff = 9007199254740992;
  let index = sortedIds.length;

  for (var i = 0; i < sortedIds.length; i++) {
    const fighter = fighters[sortedIds[i]];

    const newDiff = Math.abs(
      safeInitiative(fighter) - safeInitiative(newFighter)
    );

    if (newDiff < diff) {
      diff = newDiff;
      index = i;
      if (safeInitiative(fighter) > safeInitiative(newFighter)) index = i + 1;
      else index = i;
    }
  }

  return Math.min(index, sortedIds.length);
}

const fighterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FIGHTER:
      // Define model id client-side as we are not hitting a server
      action.payload.id = Date.now();

      let insertIndex = indexOfMinDiffInitiative(
        state.sortedIds,
        state.fighters,
        action.payload
      );

      return {
        ids: [...state.ids, action.payload.id],
        // sortedIds: [...state.sortedIds, action.payload.id],
        sortedIds: [
          ...state.sortedIds.slice(0, insertIndex),
          action.payload.id,
          ...state.sortedIds.slice(insertIndex)
        ],
        fighters: {
          ...state.fighters,
          [action.payload.id]: action.payload
        }
      };
    case EDIT_FIGHTER:
      return {
        ids: state.ids,
        sortedIds: state.sortedIds,
        fighters: {
          ...state.fighters,
          [action.payload.id]: action.payload
        }
      };
    case CLEAR_FIGHTERS:
      return {
        ids: [],
        sortedIds: [],
        fighters: {}
      };

    case NEXT_FIGHTER:
      return {
        ids: state.ids,
        sortedIds: [..._.slice(state.sortedIds, 1), _.first(state.sortedIds)],
        fighters: state.fighters
      };
    default:
      return state;
  }
};

export default fighterReducer;
