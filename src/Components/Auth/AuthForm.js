import { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './AuthForm.module.css';
import { connect } from 'react-redux';
import { userSignup, userSignin } from '../../actions/auth';

const AuthForm = (props) => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const nameInputRef = useRef();
  const [isLogin, setIsLogin] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true);

    if (!isLogin) {
      props.userSignin({
        email: enteredEmail,
        password: enteredPassword,
      });
    }
    if (isLogin) {
      props.userSignup({
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
      });
    }
    if (props.authToken.idToken !== '') {
      history.replace('/');
    }
  };

  return (
    <section className={classes.auth} style={{ marginTop: '130px' }}>
      <h1>{isLogin ? 'Sign Up' : 'Login'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Create Account' : 'Login'}</button>

          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Login with existing account' : 'Create new account'}
          </button>
        </div>
      </form>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    authToken: state.authReducer.token,
  };
};

export default connect(mapStateToProps, { userSignup, userSignin })(AuthForm);
