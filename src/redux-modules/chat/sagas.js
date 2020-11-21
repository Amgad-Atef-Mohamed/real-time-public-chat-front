import { takeEvery, put, takeLatest } from 'redux-saga/effects';
import Cookies from 'js-cookie';
import { Api, Urls, Status } from 'utils/api';
import { COOKIES_KEYS } from 'utils/constants';
import { MESSAGES } from './actions';
import ROUTES from "routes";

const {
  SEND_MESSAGE,
  SEND_MESSAGE_FAIL,
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAIL,
} = MESSAGES;

function* sendMessage(payload) {
  const { message, name } = payload;
  const { TOKEN } = COOKIES_KEYS;
  const token = Cookies.get(TOKEN);
  const { messages } = Urls;
  const api = new Api();
  const url = messages.sendNewMessageUrl;
  const header = [
    {
      key: 'token',
      value: token,
    },
  ];
  const body = { message };

  const response = yield api.post(url, body, header);

  if (!Status.isSuccess(response.status)) {
    const {
      response: { message },
    } = response;

    yield put({
      type: SEND_MESSAGE_FAIL,
      err: message,
    });
  }
}

function* getMessages(payload) {
  const { LOGIN: lOGIN_ROUTE } = ROUTES;
  console.log('payload', payload)
  const { historyPush } = payload;

  const { TOKEN } = COOKIES_KEYS;
  const token = Cookies.get(TOKEN);
  const { messages } = Urls;
  const api = new Api();
  const url = messages.getMessagesUrl;
  const header = [
    {
      key: 'token',
      value: token,
    },
  ];

  const response = yield api.get(url, header);

  if (Status.isSuccess(response.status)) {
    yield put({
      type: GET_MESSAGES_SUCCESS,
      messages: response.response,
    });
  } else if (Status.isNotAuthorized(response.status)) {
    yield historyPush(lOGIN_ROUTE);

    yield put({
      type: GET_MESSAGES_SUCCESS,
      messages: [],
    });
  } else {
    const {
      response: { message },
    } = response;

    yield put({
      type: GET_MESSAGES_FAIL,
      err: message,
    });
  }
}

function* notificationsSaga() {
  yield takeEvery(SEND_MESSAGE, sendMessage);
  yield takeLatest(GET_MESSAGES, getMessages);
}

export default notificationsSaga;
