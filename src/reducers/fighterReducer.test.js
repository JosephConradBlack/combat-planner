import actions from '../actions/fighterActions';
import reducer from './fighterReducer';

describe('fighter reducer', () => {
  const defaultState = {
    ids: [],
    sortedIds: [],
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

  describe('ADD_FIGHTER', () => {
    it('add to empty list', () => {
      const fighter = {
        name: 'Goblin 1'
      };

      const id = 'fake-id';
      const action = actions.addFighter(fighter);

      expect(reducer(defaultState, action)).toEqual({
        ids: [id],
        sortedIds: [id],
        fighters: {
          [id]: fighter
        }
      });
      expect(dateNowMock.mock.calls.length).toBe(1);
    });

    it('add fighter with lower initiative', () => {
      const defaultState = {
        ids: ['id-1'],
        sortedIds: ['id-1'],
        fighters: {
          'id-1': {
            id: 'id-1',
            name: 'Goblin',
            initiative: 10
          }
        }
      };

      const newFighter = {
        name: 'Goblin 2',
        initiative: 7
      };
      const action = actions.addFighter(newFighter);
      const result = reducer(defaultState, action);

      expect(result.sortedIds).toEqual(['id-1', 'fake-id']);
    });

    it('add fighter with higher initative', () => {
      const defaultState = {
        ids: ['id-1'],
        sortedIds: ['id-1'],
        fighters: {
          'id-1': {
            id: 'id-1',
            name: 'Goblin',
            initiative: 10
          }
        }
      };

      const newFighter = {
        name: 'Goblin 2',
        initiative: 12
      };
      const action = actions.addFighter(newFighter);
      const result = reducer(defaultState, action);

      expect(result.sortedIds).toEqual(['fake-id', 'id-1']);
    });

    it('add fighter with mixed sorting - middle number', () => {
      const defaultState = {
        ids: ['id-1'],
        sortedIds: ['id-2', 'id-1'],
        fighters: {
          'id-1': {
            id: 'id-1',
            name: 'Goblin',
            initiative: 10
          },
          'id-2': {
            id: 'id-1',
            name: 'Goblin',
            initiative: 7
          }
        }
      };

      const newFighter = {
        name: 'Goblin 2',
        initiative: 4
      };
      const action = actions.addFighter(newFighter);
      const result = reducer(defaultState, action);

      expect(result.sortedIds).toEqual(['id-2', 'fake-id', 'id-1']);
    });

    it('add fighter with mixed sorting - high number', () => {
      const defaultState = {
        ids: ['id-1'],
        sortedIds: ['id-2', 'id-1'],
        fighters: {
          'id-1': {
            id: 'id-1',
            name: 'Goblin',
            initiative: 10
          },
          'id-2': {
            id: 'id-1',
            name: 'Goblin',
            initiative: 7
          }
        }
      };

      const newFighter = {
        name: 'Goblin',
        initiative: 11
      };
      const action = actions.addFighter(newFighter);
      const result = reducer(defaultState, action);

      expect(result.sortedIds).toEqual(['id-2', 'fake-id', 'id-1']);
    });
  });

  it('should handle EDIT_FIGHTER', () => {
    const id = 'fake-id';

    const originalFighter = {
      id: id,
      name: 'Goblin 1',
      health: 30
    };

    const defaultState = {
      ids: [id],
      sortedIds: [id],
      fighters: {
        [id]: originalFighter
      }
    };

    const updatedFighter = {
      id: id,
      name: 'Goblin 1',
      health: 60
    };

    const action = actions.editFighter(updatedFighter);

    expect(reducer(defaultState, action)).toEqual({
      ids: [id],
      sortedIds: [id],
      fighters: {
        [id]: updatedFighter
      }
    });
  });

  it('should handle CLEAR_FIGHTERS', () => {
    const id = 'fake-id';

    const originalFighter = {
      id: id,
      name: 'Goblin 1',
      health: 30
    };

    const defaultState = {
      ids: [id],
      sortedIds: [id],
      fighters: {
        [id]: originalFighter
      }
    };

    const action = actions.clearFighters();
    expect(reducer(defaultState, action)).toEqual({
      ids: [],
      sortedIds: [],
      fighters: {}
    });
  });

  it('should handle NEXT_FIGHTER', () => {
    const defaultState = {
      ids: ['id-1', 'id-2', 'id-3'],
      sortedIds: ['id-1', 'id-2', 'id-3'],
      fighters: {
        'id-1': {
          id: 'id-1',
          name: 'Goblin 1',
          initiative: 10
        },
        'id-2': {
          id: 'id-2',
          name: 'Goblin 2',
          initiative: 7
        },
        'id-3': {
          id: 'id-3',
          name: 'Goblin 3',
          initiative: 4
        }
      }
    };

    const action = actions.nextFighter();
    const result = reducer(defaultState, action);
    expect(result.sortedIds).toEqual(['id-2', 'id-3', 'id-1']);
  });
});
