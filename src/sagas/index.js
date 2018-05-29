// @flow

import { put, call, takeLatest, fork, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as membersActions from '../actions/DataItemsActions';
import * as configActions from '../actions/ConfigActions';
import { fetchConfigFeature } from './Config';
import DataSourceModel from '../models/DataSourceModel';

const delay = ms => new Promise(res => setTimeout(res, ms));

export function fetchMembersApi(ds: DataSourceModel) {
  return axios.get(ds.getUrl())
    .then(response => response.data.d.results)
    .catch((error) => {
      throw error;
    });
}

export function* fetchMembers(action) {
  const members = yield call(fetchMembersApi, action.dataSource);
  yield put(membersActions.receiveMembers(members));
}

export function* fetchFilterMembers(action) {
  // we decided to delay the execution to wait more input and dont make a request on key pressed
  yield delay(1000);
  yield fork(fetchMembers, action);
}

export default function* root() {
  yield takeLatest(membersActions.REQUEST_MEMBERS, fetchMembers);
  yield takeLatest(membersActions.FILTER_MEMBERS, fetchFilterMembers);
  yield takeEvery(configActions.REQUEST_CONFIG_FEATURE, fetchConfigFeature);
}
