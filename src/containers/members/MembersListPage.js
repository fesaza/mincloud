import { connect } from 'react-redux';
import Members from '../../components/members/Members';
import { requestMembers } from '../../actions/MembersActions';

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(requestMembers()),
});

function mapStateToProps(state) {
  const { members } = state;
  return {
    ...members,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Members);

