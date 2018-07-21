import { connect } from 'react-redux';

import FighterList from '../components/FighterList';

import { editFighter } from '../actions/fighterActions';
import { getFighters } from '../selectors/fighterSelectors';

const mapStateToProps = state => {
  return {
    items: getFighters(state)
  };
};

const mapDispatchToProps = {
  onFighterUpdate: editFighter
};

const FighterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FighterList);

export default FighterListContainer;
