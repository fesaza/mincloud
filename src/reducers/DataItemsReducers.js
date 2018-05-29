import * as membersActions from '../actions/DataItemsActions';

const initialState = {
  isFetching: false,
  items: [],
};

const members = (state = initialState, action) => {
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
        items: [...action.items],
      };
    default:
      return state;
  }
};

export default members;
