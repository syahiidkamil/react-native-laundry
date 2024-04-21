import {call, put, takeLatest} from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
  loginSuccess,
  loginFailure,
} from '../actions/authActions';
import {loginAPI, LoginResponse} from '../../api/authAPI';
import {saveToken} from '../../utils/secureStore';
import {DecodedToken, decodeToken} from '../../utils/jwtUtils';
import {Alert} from 'react-native';

function* loginUser(action: any): Generator {
  try {
    const {email, password} = action.payload;
    const response = (yield call(
      loginAPI,
      email,
      password,
    )) as unknown as LoginResponse;

    const {token} = response.data;
    yield call(saveToken, token);

    const {userId, role} = (yield call(
      decodeToken,
      token,
    )) as unknown as DecodedToken;
    Alert.alert(role);
    yield put(loginSuccess({userId, role}));
  } catch (error: any) {
    yield put(loginFailure(error.message));
  }
}

function* authSaga(): Generator {
  yield takeLatest(LOGIN_REQUEST, loginUser);
}

export default authSaga;
