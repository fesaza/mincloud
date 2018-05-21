export const REQUEST_MEMBERS = 'REQUEST_MEMBERS';
export const RECEIVE_MEMBERS = 'RECEIVE_MEMBERS';

export function requestMembers() {
  return { type: REQUEST_MEMBERS };
}

export function receiveMembers(members) {
  return {
    type: RECEIVE_MEMBERS,
    members,
  };
}
