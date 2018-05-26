
import labels from '../utils/Localization';

const TO_PREFIX = '';

const navItems = [{
  label: labels.addMembers,
  to: `${TO_PREFIX}/`,
  exact: true,
  icon: 'inbox',
}, {
  label: labels.membersTitle,
  to: `${TO_PREFIX}/feature`,
  icon: 'star',
}, {
  label: 'Send mail',
  to: `${TO_PREFIX}/send-mail`,
  icon: 'send',
}, {
  label: 'Drafts',
  to: `${TO_PREFIX}/drafts`,
  icon: 'drafts',
}];

export { navItems };
