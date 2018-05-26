import { combineReducers } from 'redux';
import members from './MembersReducers';
import financial from './FinancialReducers';
import config from './ConfigReducers';

const rootReduer = combineReducers({
  members,
  financial,
  config,
});

export default rootReduer;
