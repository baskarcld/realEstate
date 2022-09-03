import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import styles from '../Form/Modal.module.css';
import { RiCloseLine } from 'react-icons/ri';
const ResponseModal = ({ setIsOpenApi, authErr, signUpstatus }) => {
  const [authErrState, setAuthErrState] = useState(0);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAuthErrState(authErr);
      setStatus(signUpstatus);
    }, 700);
  }, [authErr, signUpstatus]);
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpenApi(false)} />
      <div className={styles.centeredAPi}>
        <div className={styles.modal}>
          <button
            className={styles.closeBtn}
            onClick={() => setIsOpenApi(false)}
          >
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <div className={styles.modalContentAPi}>
            <h4 className={styles.heading}>                
               {authErr.message}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    signupError: state.authReducer.authErr,
  };
};

export default connect(mapStateToProps, null)(ResponseModal);
