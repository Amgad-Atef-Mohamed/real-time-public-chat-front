export const MESSAGES = {
  GET_MESSAGES: 'GET_MESSAGES',
  GET_MESSAGES_SUCCESS: 'GET_MESSAGES_SUCCESS',
  GET_MESSAGES_FAIL: 'GET_MESSAGES_FAIL',
  SEND_MESSAGE: 'SEND_MESSAGE',
  SEND_MESSAGE_SUCCESS: 'SEND_MESSAGE_SUCCESS',
  SEND_MESSAGE_FAIL: 'SEND_MESSAGE_FAIL',
};

export const sendMessage = (message, name) => ({
  type: MESSAGES.SEND_MESSAGE,
  message,
  name,
});

export const sendMessageSuccess = message => ({
  type: MESSAGES.SEND_MESSAGE_SUCCESS,
  message,
});

export const sendMessageFail = err => ({
  type: MESSAGES.SEND_MESSAGE_FAIL,
  err,
});

export const getMessages = historyPush => ({
  type: MESSAGES.GET_MESSAGES,
  historyPush,
});

export const getMessagesSuccess = messages => ({
  type: MESSAGES.GET_MESSAGES_SUCCESS,
  messages,
});

export const getMessagesFail = err => ({
  type: MESSAGES.GET_MESSAGES_FAIL,
  err,
});
