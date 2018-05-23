import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as membersActions from '../actions/MembersActions';
import * as settings from '../config';

export function fetchMembersApi() {
  return axios.get(`${settings.URL_DATA}/Mincloud_Lappiz_Personass?$format=json&$top=20&$inlinecount=allpages`)
    .then(response => response.data.d.results)
    // .then(items => items.map(item => JSON.parse(item)))
    .catch((error) => {
      throw error;
    });
}

export function* fetchMembers() {
  const members = yield call(fetchMembersApi);
  yield put(membersActions.receiveMembers(members));
}

export default function* root() {
  yield takeLatest(membersActions.REQUEST_MEMBERS, fetchMembers);
}
