import { takeEvery, takeLatest, put, call, race, fork, take } from 'redux-saga/effects';
import ls from 'local-storage';
import ROUTES from 'routes/index';
import { Api, Urls, Status } from 'utils/api';
import { COOKIES_KEYS } from 'utils/constants';
import socketIOClient from 'socket.io-client';
import { delay, eventChannel } from 'redux-saga';
import { USER } from './actions';
import { MESSAGES } from '../chat/actions';

const {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_PASSWORD,
  SET_PASSWORD_SUCCESS,
  SET_PASSWORD_FAIL,
  SOCKET_IO_SERVER_ON,
  SOCKET_IO_SERVER_OFF,
} = USER;
const { SEND_MESSAGE_SUCCESS } = MESSAGES;

function* login(payload) {
  const { NOTIFICATIONS } = ROUTES;
  const { userCredentials, historyPush } = payload;
  const { user } = Urls;
  const api = new Api();
  const url = user.login;

  const response = yield api.post(url, userCredentials);

  if (Status.isSuccess(response.status)) {
    const {
      response: { user },
    } = response;
    const { PLAIN_USER } = COOKIES_KEYS;

    ls.set(PLAIN_USER, user);

    yield put({
      type: LOGIN_SUCCESS,
      user,
    });

    yield historyPush(NOTIFICATIONS);
  } else {
    const {
      response: { message },
    } = response;

    yield put({
      type: LOGIN_FAIL,
      err: message,
    });
  }
}

function* register(payload) {
  const { SET_PASSWORD } = ROUTES;
  const { data, historyPush } = payload;
  const { user } = Urls;
  const api = new Api();
  const url = user.register;

  const response = yield api.post(url, data);

  if (Status.isSuccess(response.status)) {
    yield put({
      type: REGISTER_SUCCESS,
    });

    yield historyPush(`${SET_PASSWORD}?email=${data.email}`);
  } else {
    const {
      response: { message },
    } = response;

    yield put({
      type: REGISTER_FAIL,
      err: message,
    });
  }
}

function* setPassword(payload) {
  const { LOGIN: lOGIN_ROUTE } = ROUTES;
  const { data, historyPush } = payload;
  const { user } = Urls;
  const api = new Api();
  const url = user.setPassword;

  const response = yield api.patch(url, data);

  if (Status.isSuccess(response.status)) {
    yield put({
      type: SET_PASSWORD_SUCCESS,
    });

    yield historyPush(lOGIN_ROUTE);
  } else {
    const {
      response: { message },
    } = response;

    yield put({
      type: SET_PASSWORD_FAIL,
      err: message,
    });
  }
}

function connectToSocketIo(payload) {
  const { baseUrl } = Urls;

  const socket = socketIOClient(baseUrl);
  return new Promise(resolve => {
    socket.on('connect', () => {
      socket.emit('chatIn', payload.user);
      resolve(socket);
    });
  });
}

const reconnect = () => {
  const { baseUrl } = Urls;

  const socket = socketIOClient(baseUrl);
  return new Promise(resolve => {
    socket.on('reconnect', () => {
      resolve(socket);
    });
  });
};

const disconnect = () => {
  const { baseUrl } = Urls;

  const socket = socketIOClient(baseUrl);
  return new Promise(resolve => {
    socket.on('disconnect', () => {
      resolve(socket);
    });
  });
};
const createSocketChannel = sendSocket =>
  eventChannel(emit => {
    sendSocket.on('newMessage', data => {
      emit({
        type: SEND_MESSAGE_SUCCESS,
        data,
        key: 'message',
      });
    });

    return () => {
      sendSocket.off('newMessage', () => {});
    };
  });

const listenDisconnectSaga = function*() {
  while (true) {
    yield call(disconnect);
    yield put({ type: SOCKET_IO_SERVER_OFF });
  }
};

const listenConnectSaga = function*() {
  while (true) {
    yield call(reconnect);
    yield put({ type: SOCKET_IO_SERVER_ON });
  }
};

function* connect(payload) {
  try {
    const { timeout } = yield race({
      connected: call(connectToSocketIo, payload),
      timeout: delay(20000),
    });

    if (timeout) {
      yield put({ type: SOCKET_IO_SERVER_OFF });
    }

    const createdSocket = yield call(connectToSocketIo, payload);
    const socketChannel = yield call(createSocketChannel, createdSocket);
    yield fork(listenDisconnectSaga);
    yield fork(listenConnectSaga);
    yield put({ type: SOCKET_IO_SERVER_ON });
    while (true) {
      const payload = yield take(socketChannel);
      yield put({ type: payload.type, [payload.key]: payload.data });
    }
  } catch (error) {
    console.log(error);
  }
}

function* userSaga() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(REGISTER, register);
  yield takeLatest(SET_PASSWORD, setPassword);
  yield takeEvery(LOGIN_SUCCESS, connect);
}

export default userSaga;
