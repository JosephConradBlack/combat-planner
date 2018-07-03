import { connect } from 'react-redux';

import { addFighter } from '../actions/fighterActions';
import FighterEditableFrom from '../components/FighterEditableForm';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  onSubmit: addFighter
};

const FighterEditableFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FighterEditableFrom);

export default FighterEditableFormContainer;
