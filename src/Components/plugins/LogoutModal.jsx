import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/auth";
import styles from "../Form/Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
const LogoutModal = (props) => {
  const [authErrState, setAuthErrState] = useState(0);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAuthErrState(props.authErr);
    }, 700);
  }, [props.authErr]);
  const closeModalHandler = () => {
    props.closeModal(false);
  };
  return (
    <>
      <div className={styles.centeredAPi}>
        <div className={styles.modal}>
          <button className={styles.closeBtn} onClick={closeModalHandler}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContentAPi}>
            <h4 className={styles.headingError}>
              You have successfully logged out!.
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    signupError: state.authReducer.authErr,
  };
};

export default connect(mapStateToProps, { closeModal })(LogoutModal);