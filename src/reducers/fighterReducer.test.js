import actions from '../actions/fighterActions';
import reducer from './fighterReducer';

describe('fighter reducer', () => {
  const defaultState = {
    ids: [],
    fighters: {}
  };

  let realDateNow = null;
  let dateNowMock = null;

  beforeAll(() => {
    realDateNow = Date.now;
    dateNowMock = jest.fn(() => 'fake-id');

    Date.now = dateNowMock;
  });

  afterAll(() => {
    Date.now = realDateNow;
  });

  it('should return the inital state', () => {
    expect(reducer(undefined, {})).toEqual(defaultState);
  });

  it('should handle ADD_FIGHTER', () => {
    const fighter = {
      name: 'Goblin 1'
    };

    const id = 'fake-id';
    const action = actions.addFighter(fighter);

    expect(reducer(defaultState, action)).toEqual({
      ids: [id],
      fighters: {
        [id]: fighter
      }
    });
    expect(dateNowMock.mock.calls.length).toBe(1);
  });
});
