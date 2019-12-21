import apiClient from '../api/config';

const IS_LOGGED_IN = '/logged_in';
const LOGIN = '/users/sign_in';
const LOGOUT = '/users/sign_out';

export const getIsLoggedIn = async () => {
  try {
    const response = await apiClient.fetch(IS_LOGGED_IN);
    const { logged_in } = response;

    return logged_in;
  } catch (err) {
    console.log(err)
  }
};

export const login = async ({ userEmail, password }) => {
  console.log('login');

  try {
    const response = await apiClient.post(LOGIN, {
      'user[email]': userEmail,
      'user[password]': password,
    });

    updateCSRFToken(response['csrfToken']);

    return response;
  } catch (err) {
    console.log(err)
  }
};

export const logout = async () => {
  try {
    const response = await apiClient.delete(LOGOUT);

    updateCSRFToken(response['csrfToken']);

    return response;
  } catch (err) {
    console.log(err)
  }
};

const updateCSRFToken = (newToken) => {
  document.getElementsByTagName('meta')['csrf-token'].setAttribute('content', newToken);
}
