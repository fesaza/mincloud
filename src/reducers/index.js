import { combineReducers } from 'redux';
import members from './MembersReducers';
import financial from './FinancialReducers';

const rootReduer = combineReducers({
  members,
  financial,
});

export default rootReduer;
