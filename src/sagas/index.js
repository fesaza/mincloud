// @flow

import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as membersActions from '../actions/MembersActions';
import DataSourceModel from '../models/DataSourceModel';

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

export default function* root() {
  yield takeLatest(membersActions.REQUEST_MEMBERS, fetchMembers);
  yield takeLatest(membersActions.FILTER_MEMBERS, fetchMembers);
}
