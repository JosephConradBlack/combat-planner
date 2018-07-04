import { connect } from 'react-redux';

import FighterList from '../components/FighterList';
import { getFighters } from '../selectors/fighterSelectors';

const mapStateToProps = state => {
  return {
    items: getFighters(state)
  };
};

const mapDispatchToProps = {};

const FighterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FighterList);

export default FighterListContainer;
