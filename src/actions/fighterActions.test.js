import actions from './fighterActions';

describe('fighter actions', () => {
  it('should create create an action and add a figher', () => {
    const fighter = { id: Date.now, name: 'Goblin 1' };
    const expectedAction = {
      type: actions.ADD_FIGHTER,
      payload: fighter
    };

    expect(actions.addFighter(fighter)).toEqual(expectedAction);
  });
});
