import axios from "axios";
import { newError } from "./error";

let signInUrl = "https://rms.cloudinlabs.com/api/login";

let signUpUrl = "https://rms.cloudinlabs.com/api/register";

const AUTH_SIGNUP = "AUTH_SIGNUP";
const AUTH_SIGNUP_ERROR = "AUTH_SIGNUP_ERROR";
const AUTH_SIGNIN = "AUTH_SIGNIN";

const LOGOUT = "LOGOUT";

const authSignUpSuccess = (auth) => ({
  type: AUTH_SIGNUP,
  auth: auth,
});
const authSignUpError = (authErr) => ({
  type: AUTH_SIGNUP_ERROR,
  authErr: authErr,
});

export const userSignup = (data) => (dispatch) => {
  console.log(data);
  axios
    .post(`${signUpUrl}`, {
      ...data,
    })
    .then((response) => {
      dispatch(authSignUpSuccess(response.data));
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data);
        dispatch(authSignUpError(err.response.data));
      }
    });
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
      localStorage.setItem("token", response.data.data.accessToken);
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
