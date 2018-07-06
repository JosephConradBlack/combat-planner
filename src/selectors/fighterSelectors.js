import _ from 'underscore';

export const getFighters = state =>
  _.map(state.fighters.ids, id => state.fighters.fighters[id]);
