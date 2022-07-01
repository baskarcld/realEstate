const initialState = {
  token: '',
  isSignUp: false,
  isSignIn: false,
  logout: false,
  updatedData: {},
  authErr: null,
   
};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_SIGNUP': {
      return {
        ...state,
        token: action.auth,
        isSignUp: action.auth !== null ? true : false,
      };
    }
    case 'AUTH_SIGNUP_ERROR': {
      return {
        ...state,
        authErr: action.authErr,
      };
    }

    case 'AUTH_SIGNIN': {
      return {
        ...state,
        token: action.auth,
        isSignIn: action.auth !== null ? true : false,
        logout: true,
      };
    }

    case 'LOGOUT': {
      return {
        ...state,
        logout: action.logout,
      };
    }

    default: {
      return state;
    }
  }
}
