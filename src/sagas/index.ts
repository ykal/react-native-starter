import {all} from 'redux-saga/effects';
import users from './user';

export default function* root() {
  yield all([users()]);
}
