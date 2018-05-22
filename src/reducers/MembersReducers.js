import * as membersActions from '../actions/MembersActions';

const members = (state = {
  isFetching: false,
  items: [],
}, action) => {
  switch (action.type) {
    case membersActions.RESTART_MEMBERS_CACHE:
    case membersActions.REQUEST_MEMBERS:
      return {
        items: [],
        isFetching: true,
      };
    case membersActions.RECEIVE_MEMBERS:
      return {
        ...state,
        isFetching: false,
        items: action.members,
      };
    default:
      return state;
  }
};

export default members;
