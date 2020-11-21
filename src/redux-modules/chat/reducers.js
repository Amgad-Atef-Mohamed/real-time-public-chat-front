import { union } from 'lodash';
import { MESSAGES } from './actions';

const initialState = {
  messages: [],
  sendMessage: {
    isFetching: false,
    isSuccess: false,
    isFail: { isError: false, message: '' },
  },
  getMessages: {
    isFetching: false,
    isSuccess: false,
    isFail: { isError: false, message: '' },
  },
};

export default (state = initialState, { type, ...payload }) => {
  const {
    SEND_MESSAGE,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAIL,
    GET_MESSAGES,
    GET_MESSAGES_SUCCESS,
    GET_MESSAGES_FAIL,
  } = MESSAGES;
  const { err, messages, message } = payload;
  const { messages: messagesState } = state;

  switch (type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        sendMessage: {
          isFetching: true,
          isSuccess: false,
          isFail: { isError: false, message: '' },
        },
        snackBar: { show: false, message: '' },
      };
    }
    case SEND_MESSAGE_SUCCESS: {
      return {
        ...state,
        messages: union(messagesState, [message]),
        sendMessage: {
          isFetching: false,
          isSuccess: true,
          isFail: { isError: false, message: '' },
        },
        snackBar: { show: true, message: 'تم إرسال التنبيه بنجاح' },
      };
    }
    case SEND_MESSAGE_FAIL: {
      return {
        ...state,
        sendMessage: {
          isFetching: false,
          isSuccess: false,
          isFail: { isError: true, message: err },
        },
        snackBar: { show: true, message: err },
      };
    }
    case GET_MESSAGES: {
      return {
        ...state,
        getMessages: {
          isFetching: true,
          isSuccess: false,
          isFail: { isError: false, message: '' },
        },
        snackBar: { show: false, message: '' },
      };
    }
    case GET_MESSAGES_SUCCESS: {
      return {
        ...state,
        messages: messages.reverse(),
        getMessages: {
          isFetching: false,
          isSuccess: true,
          isFail: { isError: false, message: '' },
        },
        snackBar: { show: true, message: 'تم إرسال التنبيه بنجاح' },
      };
    }
    case GET_MESSAGES_FAIL: {
      return {
        ...state,
        getMessages: {
          isFetching: false,
          isSuccess: false,
          isFail: { isError: true, message: err },
        },
        snackBar: { show: true, message: err },
      };
    }
    default:
      return state;
  }
};
