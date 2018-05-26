import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { receiveConfigFeature } from '../actions/ConfigActions';

export function fetchMembersApi(action) {
  const url = `http://localhost:3004/${action.featureId}`;
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
