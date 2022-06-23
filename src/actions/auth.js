import axios from 'axios';
import { newError } from './error';

let signInUrl = 'https://rms.cloudinlabs.com/api/login';

let signUpUrl = 'https://rms.cloudinlabs.com/api/register';

const AUTH_SIGNUP = 'AUTH_SIGNUP';
const AUTH_SIGNIN = 'AUTH_SIGNIN';

const LOGOUT = 'LOGOUT';

const authSignUpSuccess = (auth) => ({
  type: AUTH_SIGNUP,
  auth: auth,
});

export const userSignup = (data) => (dispatch) => {
  axios
    .post(`${signUpUrl}`, {
      ...data,
    })
    .then((response) => {
      dispatch(authSignUpSuccess(response.data));
    })
    .catch((err) => dispatch(newError(err.response)));
};

const authSignInSuccess = (auth) => ({
  type: AUTH_SIGNIN,
  auth: auth,
});

export const userSignin = (data) => (dispatch) => {
  axios
    .post(`${signInUrl}`, {
      ...data,
    })
    .then((response) => {
      localStorage.setItem('token', response.data.data.accessToken);
      dispatch(authSignInSuccess(response.data.data.accessToken));
    })
    .catch((err) => dispatch(newError(err.response)));
};

const logoutSuccess = (logout) => ({
  type: LOGOUT,
  logout: logout,
});

export const logoutHandler = (data) => (dispatch) => {
  dispatch(logoutSuccess(data));
};
