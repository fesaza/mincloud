
import * as configActions from '../actions/ConfigActions';

const config = (state = {}, action) => {
  switch (action.type) {
    case configActions.REQUEST_CONFIG_FEATURE: {
      const newState = {
        ...state,
      };
      newState[action.featureId] = {
        isFetching: true,
      };
      return newState;
    }
    case configActions.RECEIVE_CONFIG_FEATURE: {
      const newState = {
        ...state,
      };
      newState[action.featureId] = {
        ...action.configuration,
        isFetching: false,
      };
      return newState;
    }
    default:
      return state;
  }
};

export default config;
