import reducer from '../DataItemsReducers';
import * as actions from '../../actions/DataItemsActions';


describe('dataItems reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isFetching: false,
      items: [],
    });
  });

  it('should handle request items', () => {
    const featureId = 'membersGrid';
    expect(reducer({}, {
      type: actions.REQUEST_MEMBERS,
    })).toEqual({
      items: [],
      isFetching: true,
    });

    expect(reducer({}, {
      type: actions.RESTART_MEMBERS_CACHE,
    })).toEqual({
      items: [],
      isFetching: true,
    });
    const items = [{}, {}];
    expect(reducer({}, {
      type: actions.RECEIVE_MEMBERS,
      items,
    })).toEqual({
      isFetching: false,
      items,
    });
  });
});
