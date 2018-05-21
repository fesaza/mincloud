import { put, call, fork } from 'redux-saga/effects';
import axios from 'axios';
import * as membersActions from '../actions/MembersActions';
import * as settings from '../config';


export function fetchMembersApi() {
  return axios.get(`${settings.URL_DATA}/Mincloud_Lappiz_Personass?$format=json&$top=10&$inlinecount=allpages`)
    .then(response => response.data.d.results)
    .catch((error) => {
      throw error;
    });
}

export function* fetchMembers() {
  yield put(membersActions.requestMembers());
  const members = yield call(fetchMembersApi);
  yield put(membersActions.receiveMembers(members));
}

export function* startup() {
  yield fork(fetchMembers);
}

export default function* root() {
  yield fork(startup);
}
