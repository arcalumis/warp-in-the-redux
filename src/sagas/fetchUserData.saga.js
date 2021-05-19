import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

const fetchUserData = async () => {
  const response = await fetch('/api/userData');
  return response.json()
}


function* fetchUser() {
    try {
       const user = yield fetchUserData();
       yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
       yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 }

export default function* fetchUserDataSaga() {
    yield takeEvery("FETCH_USER_DATA", fetchUser);
}