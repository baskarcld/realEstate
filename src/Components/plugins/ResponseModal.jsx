import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/auth";
import styles from "../Form/Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
const ResponseModal = (props) => {
  const [authErrState, setAuthErrState] = useState(0);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAuthErrState(props.authErr);
    }, 500);
  }, [props.authErr]);

  useEffect(() => {
    setTimeout(() => {
      window.location.reload(true);
    }, 2000);
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
            <h4 className={styles.headingError}>{props.authErr.message}</h4>
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

export default connect(mapStateToProps, { closeModal })(ResponseModal);
