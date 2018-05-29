import { mapDataSource } from '../utils/Utils';

export const REQUEST_MEMBERS = 'REQUEST_MEMBERS';
export const RECEIVE_MEMBERS = 'RECEIVE_MEMBERS';
export const RESTART_MEMBERS_CACHE = 'RESTART_MEMBERS_CACHE';
export const FILTER_MEMBERS = 'FILTER_MEMBERS';

export function requestMembers(dataSource) {
  return {
    type: REQUEST_MEMBERS,
    dataSource: mapDataSource(dataSource),
  };
}

export function receiveMembers(items) {
  return {
    type: RECEIVE_MEMBERS,
    items,
  };
}

export function filterItems(dataSource) {
  return {
    type: FILTER_MEMBERS,
    dataSource: mapDataSource(dataSource),
  };
}
