import { connect } from 'react-redux';
import { requestMembers, filterItems } from '../../actions/MembersActions';
import createListPages from './CreateListPages';
// import CardList from '../../components/Lists/CardList';
import GridList from '../../components/Lists/GridList';

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

export default connect(mapStateToProps, mapDispatchToProps)(createListPages(GridList));

