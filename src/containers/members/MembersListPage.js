import { connect } from 'react-redux';
import Members from '../../components/members/Members';
import { requestMembers, filterItems } from '../../actions/MembersActions';

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(requestMembers()),
  onFilter: filter => dispatch(filterItems(`substringof('${filter}', CECENombre)`)),
});

function mapStateToProps(state) {
  const { members } = state;
  return {
    ...members,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Members);

