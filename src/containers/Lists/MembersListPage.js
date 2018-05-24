import { connect } from 'react-redux';
import CardList from '../../components/Lists/CardList';
import { requestMembers, filterItems } from '../../actions/MembersActions';
import ListPages from '../Lists/ListPages';

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

export default connect(mapStateToProps, mapDispatchToProps)(ListPages(CardList));

