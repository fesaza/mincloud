import DataSourceModel from '../models/DataSourceModel';

export const REQUEST_MEMBERS = 'REQUEST_MEMBERS';
export const RECEIVE_MEMBERS = 'RECEIVE_MEMBERS';
export const RESTART_MEMBERS_CACHE = 'RESTART_MEMBERS_CACHE';
export const FILTER_MEMBERS = 'FILTER_MEMBERS';

const getDataSource = dataSource => (
  new DataSourceModel(
    dataSource.path,
    dataSource.pageSize,
    dataSource.filter,
    dataSource.expand,
    dataSource.select,
  )
);

export function requestMembers(dataSource) {
  return {
    type: REQUEST_MEMBERS,
    dataSource: getDataSource(dataSource),
  };
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

export function filterItems(dataSource) {
  return {
    type: FILTER_MEMBERS,
    dataSource: getDataSource(dataSource),
  };
}
