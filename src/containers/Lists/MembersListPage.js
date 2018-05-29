import { connect } from 'react-redux';
import { requestMembers, filterItems } from '../../actions/DataItemsActions';
import createListPages from './CreateListPages';


const mapDispatchToProps = dispatch => ({
  load: dataSource => dispatch(requestMembers(dataSource)),
  onFilterAction: dataSource => dispatch(filterItems(dataSource)),
});

function mapStateToProps(state) {
  const { members } = state;
  return {
    ...members,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(createListPages());

