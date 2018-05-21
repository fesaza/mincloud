const TO_PREFIX = '';

export const navItems = [{
  label: 'Inbox',
  to: `${TO_PREFIX}/`,
  exact: true,
  icon: 'inbox',
}, {
  label: 'Starred',
  to: `${TO_PREFIX}/starred`,
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
