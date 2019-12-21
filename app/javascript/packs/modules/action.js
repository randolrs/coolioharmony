import { getIsLoggedIn, logout, login } from '../api/auth';

const Types = {
  UPDATE_IS_LOGGED_IN: 'UPDATE_IS_LOGGED_IN',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
};

export const updateIsLoggedIn = (payload) => {
  console.log('updateIsUserLoggedIn');

  return getIsLoggedIn().then(isLoggedIn => {
    return {
      type: Types.UPDATE_IS_LOGGED_IN,
      payload: isLoggedIn
    };
  });

};

export const loginUser = (payload) => {
  return {
    type: Types.LOGIN,
    payload: payload
  };
};

export const logoutUser = (payload) => {
  return {
    type: Types.LOGOUT,
    payload: payload
  };
};

export default {
  Types
};
