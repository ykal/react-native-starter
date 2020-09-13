import {takeEvery} from 'redux-saga/effects';

import * as types from '../../actions/actionTypes';
import fetchUser from './fetchUser';

export default function* root() {
  yield takeEvery(types.USER.FETCH, fetchUser);
}
