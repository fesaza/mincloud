import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { receiveConfigFeature } from '../actions/ConfigActions';
import { URL_CONFIG } from '../config';

export function fetchMembersApi(action) {
  const url = `${URL_CONFIG}/${action.featureId}`;
  return axios.get(url)
    .then(response => response.data)
    .catch((error) => {
      throw error;
    });
}

export function* fetchConfigFeature(action) {
  const config = yield call(fetchMembersApi, action);
  yield put(receiveConfigFeature(config, action.featureId));
}
