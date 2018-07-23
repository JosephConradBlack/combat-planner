import { connect } from 'react-redux';

import CombatPlannerPage from '../components/CombatPlannerPage';

import { editFighter, clearFighters } from '../actions/fighterActions';
import { getFighters } from '../selectors/fighterSelectors';

const mapStateToProps = state => {
  return {
    items: getFighters(state)
  };
};

const mapDispatchToProps = {
  onFighterUpdate: editFighter,
  onClearFighters: clearFighters
};

const CombatPlannerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CombatPlannerPage);

export default CombatPlannerContainer;
