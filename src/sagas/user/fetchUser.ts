import {fetchUserFailure, fetchUserSuccess} from '../../actions/users';
import JSONPlaceholderAPI from '../../lib/jsonPlaceholderAPI';
import {call, put} from 'redux-saga/effects';
import {BaseAction} from '../../types';

function* fetchUserAsync(action: BaseAction) {
  try {
    const user = yield call(JSONPlaceholderAPI.fetchUser, action.payload);
    yield put(fetchUserSuccess(user));
  } catch (e) {
    yield put(fetchUserFailure(e.message));
  }
}

export default fetchUserAsync;
