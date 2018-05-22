export const REQUEST_MEMBERS = 'REQUEST_MEMBERS';
export const RECEIVE_MEMBERS = 'RECEIVE_MEMBERS';
export const RESTART_MEMBERS_CACHE = 'RESTART_MEMBERS_CACHE';

export function requestMembers() {
  return { type: REQUEST_MEMBERS };
}

export function receiveMembers(members) {
  return {
    type: RECEIVE_MEMBERS,
    members,
  };
}

export function restartMembersCache() {
  return {
    type: RESTART_MEMBERS_CACHE,
  };
}
