// @flow

import { put, call, takeLatest, fork, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as membersActions from '../actions/MembersActions';
import * as configActions from '../actions/ConfigActions';
import DataSourceModel from '../models/DataSourceModel';
import { fetchConfigFeature } from './Config';

const delay = ms => new Promise(res => setTimeout(res, ms));

function getDataSource(action) {
  return new DataSourceModel('Mincloud_Lappiz_Personass', 20, action.filter);
}

export function fetchMembersApi(ds) {
  const url = ds.getUrl();
  return axios.get(url)
    .then(response => response.data.d.results)
    .catch((error) => {
      throw error;
    });
}

export function* fetchMembers(action) {
  const members = yield call(fetchMembersApi, getDataSource(action));
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
