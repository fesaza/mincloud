import reducer from '../ConfigReducers';
import * as actions from '../../actions/ConfigActions';


describe('Config reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle request feature', () => {
    const featureId = 'membersGrid';
    expect(reducer({}, {
      type: actions.REQUEST_CONFIG_FEATURE,
      featureId,
    })).toEqual({
      membersGrid: {
        isFetching: true,
      },
    });

    expect(reducer({}, {
      type: actions.RECEIVE_CONFIG_FEATURE,
      featureId,
      configuration: {
        id: featureId,
        type: 'Feature',
      },
    }))
      .toEqual({
        membersGrid: {
          id: featureId,
          type: 'Feature',
          isFetching: false,
        },
      });
  });
});
