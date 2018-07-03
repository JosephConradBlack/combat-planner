import actions from '../actions/fighterActions';
import reducer from './fighterReducer';

describe('fighter reducer', () => {
  const defaultState = {
    ids: [],
    fighters: {}
  };

  it('should return the inital state', () => {
    expect(reducer(undefined, {})).toEqual(defaultState);
  });

  it('should handle ADD_FIGHTER', () => {
    const id = Date.now;
    const fighter = {
      id: id,
      name: 'Goblin 1'
    };

    const action = actions.addFighter(fighter);

    expect(reducer(defaultState, action)).toEqual({
      ids: [id],
      fighters: {
        [id]: fighter
      }
    });
  });
});
