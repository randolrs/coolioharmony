import apiClient from '../api/config';

const IS_LOGGED_IN = '/logged_in';
const LOGIN = '/users/sign_in';
const LOGOUT = '/users/sign_out';

export const getIsLoggedIn = async () => {
  const response = await apiClient.fetch(IS_LOGGED_IN);
  const { logged_in } = response;

  return logged_in;
};

export const login = async ({ userEmail, password }) => {
  const response = await apiClient.post(LOGIN, {
    'user[email]': userEmail,
    'user[password]': password,
  });

  if(!response['csrfToken']) throw 'Login failed';

  updateCSRFToken(response['csrfToken']);

  return response;
};

export const logout = async () => {
  const response = await apiClient.delete(LOGOUT);

  if(!response['csrfToken']) throw 'Logout failed';

  updateCSRFToken(response['csrfToken']);

  return response;
};

const updateCSRFToken = (newToken) => {
  document.getElementsByTagName('meta')['csrf-token'].setAttribute('content', newToken);
}
