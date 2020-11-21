export const USER = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
  REGISTER: 'REGISTER',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAIL: 'REGISTER_FAIL',
  SET_PASSWORD: 'SET_PASSWORD',
  SET_PASSWORD_SUCCESS: 'SET_PASSWORD_SUCCESS',
  SET_PASSWORD_FAIL: 'SET_PASSWORD_FAIL',
  SOCKET_IO_SERVER_ON: 'SOCKET_IO_SERVER_ON',
  SOCKET_IO_SERVER_OFF: 'SOCKET_IO_SERVER_OFF',

  GET_ALL_HIS_NOTIFICATIONS: 'GET_ALL_HIS_NOTIFICATIONS',
  GET_ALL_HIS_NOTIFICATIONS_SUCCESS: 'GET_ALL_HIS_NOTIFICATIONS_SUCCESS',
  GET_ALL_HIS_NOTIFICATIONS_FAIL: 'GET_ALL_HIS_NOTIFICATIONS_FAIL',
  UPDATE_ALL_HIS_NOTIFICATIONS: 'UPDATE_ALL_HIS_NOTIFICATIONS',
};

export const login = (userCredentials, historyPush) => ({
  type: USER.LOGIN,
  userCredentials,
  historyPush,
});

export const loginSuccess = user => ({
  type: USER.LOGIN_SUCCESS,
  user,
});

export const loginFail = err => ({
  type: USER.LOGIN_FAIL,
  err,
});

export const register = (data, historyPush) => ({
  type: USER.REGISTER,
  data,
  historyPush,
});

export const registerSuccess = user => ({
  type: USER.REGISTER_SUCCESS,
  user,
});

export const registerFail = err => ({
  type: USER.REGISTER_FAIL,
  err,
});

export const setPassword = (data, historyPush) => ({
  type: USER.SET_PASSWORD,
  data,
  historyPush,
});

export const setPasswordSuccess = user => ({
  type: USER.SET_PASSWORD_SUCCESS,
  user,
});

export const setPasswordFail = err => ({
  type: USER.SET_PASSWORD_FAIL,
  err,
});

export const socketIoDidnotConnectToServer = () => ({
  type: USER.SOCKET_IO_SERVER_OFF,
});

export const socketIoConnectedToServer = () => ({
  type: USER.SOCKET_IO_SERVER_ON,
});

export const getAdminAllNotifications = options => ({
  type: USER.GET_ALL_HIS_NOTIFICATIONS,
  options,
});

export const getAdminAllNotificationsSuccess = notifications => ({
  type: USER.GET_ALL_HIS_NOTIFICATIONS_SUCCESS,
  notifications,
});

export const getAdminAllNotificationsFail = err => ({
  type: USER.GET_ALL_HIS_NOTIFICATIONS_FAIL,
  err,
});

export const UPDATEAdminAllNotifications = notifications => ({
  type: USER.UPDATE_ALL_HIS_NOTIFICATIONS,
  notifications,
});
