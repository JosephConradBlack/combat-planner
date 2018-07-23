import { connect } from 'react-redux';

import CombatPlannerPage from '../components/CombatPlannerPage';

import {
  editFighter,
  clearFighters,
  nextFighter
} from '../actions/fighterActions';
import { getSortedFighters } from '../selectors/fighterSelectors';

const mapStateToProps = state => {
  return {
    items: getSortedFighters(state)
  };
};

const mapDispatchToProps = {
  onFighterUpdate: editFighter,
  onClearFighters: clearFighters,
  onNextFighter: nextFighter
};

const CombatPlannerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CombatPlannerPage);

export default CombatPlannerContainer;
