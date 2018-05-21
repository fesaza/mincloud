import { connect } from 'react-redux';
import Members from '../../components/members/Members';


function mapStateToProps(state) {
  const { members } = state;
  return {
    ...members,
  };
}

export default connect(mapStateToProps)(Members);

