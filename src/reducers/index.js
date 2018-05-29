import { combineReducers } from 'redux';
import members from './DataItemsReducers';
import config from './ConfigReducers';

const rootReduer = combineReducers({
  members,
  config,
});

export default rootReduer;
