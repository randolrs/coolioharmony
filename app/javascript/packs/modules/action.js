import { getIsLoggedIn, logout, login } from '../api/auth';

const Types = {
  UPDATE_IS_LOGGED_IN: 'UPDATE_IS_LOGGED_IN',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
};

export const updateIsLoggedIn = (payload) => {
  return getIsLoggedIn().then(isLoggedIn => {
    return {
      type: Types.UPDATE_IS_LOGGED_IN,
      payload: isLoggedIn
    };
  }).catch(err => {
    return {
      type: 'nothing',
      payload: null,
    }
  });
};

export const loginUser = (credentials) => {
  return login(credentials).then(res => {
    return {
      type: Types.LOGIN,
      payload: res
    };
  }).catch(err => {
    return {
      type: 'nothing',
      payload: null,
    }
  });
};

export const logoutUser = (payload) => {
  return logout().then(res => {
    return {
      type: Types.LOGOUT,
      payload: {}
    };
  }).catch(err => {
    return {
      type: 'nothing',
      payload: null,
    }
  });
};

export default {
  Types
};
