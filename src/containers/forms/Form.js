import { connect } from 'react-redux';
// import { requestMembers, filterItems } from '../../actions/DataItemsActions';
import createForm from './createForm';


// const mapDispatchToProps = dispatch => ({
//   load: dataSource => dispatch(requestMembers(dataSource)),
//   onFilterAction: dataSource => dispatch(filterItems(dataSource)),
// });

// function mapStateToProps(state) {
//   const { members } = state;
//   return {
//     ...members,
//   };
// }

export default connect()(createForm());

