import { unionBy } from 'lodash';
import { USER } from './actions';

const initialState = {
  user: undefined,
  applyNewFilter: false,
  login: {
    isFetching: false,
    isSuccess: false,
    isFail: { isError: false, message: '' },
  },
  register: {
    isFetching: false,
    isSuccess: false,
    isFail: { isError: false, message: '' },
  },
  setPassword: {
    isFetching: false,
    isSuccess: false,
    isFail: { isError: false, message: '' },
  },
  getAllHisNotification: {
    isFetching: false,
    isSuccess: false,
    isFail: { isError: false, message: '' },
  },
  notificationsList: [],
};

export default (state = initialState, { type, ...payload }) => {
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

    GET_ALL_HIS_NOTIFICATIONS,
    GET_ALL_HIS_NOTIFICATIONS_SUCCESS,
    GET_ALL_HIS_NOTIFICATIONS_FAIL,
    UPDATE_ALL_HIS_NOTIFICATIONS,
  } = USER;
  const { userCredentials, user, notifications, err } = payload;
  const { notificationsList: notificationsListState } = state;

  switch (type) {
    case LOGIN: {
      return {
        ...state,
        userCredentials,
        login: {
          isFetching: true,
          isSuccess: false,
          isFail: { isError: false, message: '' },
        },
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user,
        login: {
          isFetching: false,
          isSuccess: true,
          isFail: { isError: false, message: '' },
        },
      };
    }
    case LOGIN_FAIL: {
      return {
        ...state,
        login: {
          isFetching: false,
          isSuccess: false,
          isFail: { isError: true, message: err },
        },
      };
    }
    case REGISTER: {
      return {
        ...state,
        register: {
          isFetching: true,
          isSuccess: false,
          isFail: { isError: false, message: '' },
        },
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        user,
        register: {
          isFetching: false,
          isSuccess: true,
          isFail: { isError: false, message: '' },
        },
      };
    }
    case REGISTER_FAIL: {
      return {
        ...state,
        register: {
          isFetching: false,
          isSuccess: false,
          isFail: { isError: true, message: err },
        },
      };
    }

    case SET_PASSWORD: {
      return {
        ...state,
        setPassword: {
          isFetching: true,
          isSuccess: false,
          isFail: { isError: false, message: '' },
        },
      };
    }
    case SET_PASSWORD_SUCCESS: {
      return {
        ...state,
        user,
        setPassword: {
          isFetching: false,
          isSuccess: true,
          isFail: { isError: false, message: '' },
        },
      };
    }
    case SET_PASSWORD_FAIL: {
      return {
        ...state,
        setPassword: {
          isFetching: false,
          isSuccess: false,
          isFail: { isError: true, message: err },
        },
      };
    }

    case GET_ALL_HIS_NOTIFICATIONS: {
      return {
        ...state,
        getAllHisNotification: {
          isFetching: true,
          isSuccess: false,
          isFail: { isError: false, message: '' },
        },
      };
    }
    case GET_ALL_HIS_NOTIFICATIONS_SUCCESS: {
      const LastNotificationsItem = {
        _id: 'last_mention',
        title: {
          ar: 'تم عرض كل السجلات',
          en: 'There is no chat for you for now.',
        },
        createdAt: Date.now(),
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      };
      const allNotifications = unionBy(notificationsListState, notifications, '_id');
      let showViewMore = true;

      if (notifications.length < 5 && notificationsListState.length !== 0) {
        allNotifications.push(LastNotificationsItem);
        showViewMore = false;
      }

      if (notifications.length === 0 && notificationsListState.length === 0) {
        allNotifications.length = 0;
      }

      return {
        ...state,
        notificationsList: allNotifications,
        notificationCountBadge: allNotifications.length,
        showViewMore,
        getAllHisNotification: {
          isFetching: false,
          isSuccess: true,
          isFail: { isError: false, message: '' },
        },
      };
    }
    case UPDATE_ALL_HIS_NOTIFICATIONS: {
      const allNotifications = unionBy(notifications, notificationsListState, '_id');

      return {
        ...state,
        notificationsList: allNotifications,
        notificationCountBadge: allNotifications.length,
        getAllHisNotification: {
          isFetching: false,
          isSuccess: true,
          isFail: { isError: false, message: '' },
        },
      };
    }
    case GET_ALL_HIS_NOTIFICATIONS_FAIL: {
      const allNotifications = unionBy(
        notificationsListState,
        [
          {
            _id: 'last_mention',
            title: { ar: err },
            createdAt: Date.now(),
          },
        ],
        '_id',
      );
      return {
        ...state,
        notificationsList: allNotifications,
        showViewMore: false,
        getAllHisNotification: {
          isFetching: false,
          isSuccess: true,
          isFail: { isError: false, message: err },
        },
      };
    }
    default:
      return state;
  }
};
