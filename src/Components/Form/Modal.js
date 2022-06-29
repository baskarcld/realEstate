import React, { Fragment, useState } from 'react';
import styles from './Modal.module.css';
import { RiCloseLine } from 'react-icons/ri';
import { Form, Formik } from 'formik';

import { matchPath, Prompt } from 'react-router-dom';

import FormikControl from './FormikControl';
import { ContactValidation } from './validation/validation';
import { connect } from 'react-redux';

import {
  deleteAdvert,
  updateFunc,
  searchProperties,
} from '../../actions/advert';
const Modal = ({
  setIsOpen,
  advert,
  updateFunc,
  deleteAdvert,
  location,
  label,
  searchProperties,
}) => {
  const [isValueChanged, setisValueChanged] = useState(false);

  const [country, setCountry] = useState(false);
  const [postsData, setpostsData] = useState([]);
  const [submitConfirm, setSubmitConfirm] = useState(false);

  const handleChangeFunc = () => {
    setisValueChanged(true);
  };
  const getValues = (values) => {
    if (values) {
      setisValueChanged(true);
    }
  };

  const mainSubmit = (values, id) => {
    updateFunc(values, id, location, label);
    searchProperties(location);
  };
  const deleteHandler = (id) => {
    setIsOpen(false);
    deleteAdvert(id, location, label);
    searchProperties(location);
  };
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Edit / Delete</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <div className={styles.modalContent}>
            <Formik
              validationSchema={ContactValidation([
                {
                  city: '',
                  sqft: '',
                  lat: '',
                  lon: '',
                  files: '',
                },
              ])}
              enableReinitialize
              validateOnMount
              initialValues={{
                city: advert.city,
                sqft: advert.sqft,
                lat: advert.lat,
                lon: advert.lon,
                files: advert.files,
              }}
              onSubmit={(values, actions) => {
                mainSubmit(values, advert.id);
                actions.setSubmitting(false);
                actions.resetForm();
                setIsOpen(false);
              }}
            >
              {(formik) => {
                const {
                  values,
                  //errors,
                  setFieldValue,
                  setFieldTouched,
                  handleSubmit,
                  handleBlur,
                } = formik;
                const propsvalues = {
                  errors: formik.errors,
                  touched: formik.touched,
                  values: values,
                };

                let formikdirty = false;
                if (isValueChanged) {
                  formikdirty = true;
                }

                return (
                  <>
                    <Form>
                      <Prompt
                        when={formikdirty}
                        message={() => {
                          return matchPath({ path: '/home' })
                            ? true
                            : 'Are you sure you want to navigate away?';
                        }}
                      />
                      <div className="col-sm-12">
                        <div className="row">
                          <div className="col-sm-12 data-column">
                            <FormikControl
                              control="input"
                              type="text"
                              name="city"
                              label="City"
                              value={values.city}
                              positiveValidation={false}
                              placeHolder=""
                              onKeyPress={handleChangeFunc}
                              {...propsvalues}
                              maxlength={25}
                              onBlur={handleBlur}
                            />
                            <FormikControl
                              control="input"
                              type="text"
                              name="sqft"
                              label="Sqft"
                              value={values.sqft}
                              positiveValidation={false}
                              placeHolder=""
                              onKeyPress={handleChangeFunc}
                              {...propsvalues}
                              maxlength={25}
                              onBlur={handleBlur}
                            />
                            <FormikControl
                              control="input"
                              type="text"
                              name="lat"
                              label="Lat"
                              value={values.lat}
                              positiveValidation={false}
                              placeHolder=""
                              onKeyPress={handleChangeFunc}
                              {...propsvalues}
                              maxlength={25}
                              onBlur={handleBlur}
                            />
                            <FormikControl
                              control="input"
                              type="text"
                              name="lon"
                              label="Lon"
                              value={values.lon}
                              positiveValidation={false}
                              placeHolder=""
                              onKeyPress={handleChangeFunc}
                              {...propsvalues}
                              maxlength={25}
                              onBlur={handleBlur}
                            />
                            <FormikControl
                              control="input"
                              type="file"
                              name="files"
                              label="Image"
                              value={values.file}
                              positiveValidation={false}
                              placeHolder=""
                              onKeyPress={handleChangeFunc}
                              {...propsvalues}
                              maxlength={25}
                              onBlur={handleBlur}
                            />
                          </div>
                        </div>
                        <div className="row justify-content-md-center">
                          <div className="col-sm-6 align-self-center action-column">
                            <button
                              className={styles.submitBtnBtn}
                              onClick={(e) => handleSubmit(e)}
                              disabled={!formik.isValid}
                            >
                              Update
                            </button>
                          </div>
                          {submitConfirm && (
                            <h4 className="text-secondary submittedMsg">
                              Form submitted successfully!...
                            </h4>
                          )}
                        </div>
                      </div>
                    </Form>
                  </>
                );
              }}
            </Formik>
            <div
              className={styles.modalActions}
              style={{ position: 'relative' }}
            >
              <div className={styles.actionsContainer}>
                <button
                  className={styles.deleteBtn}
                  onClick={() => deleteHandler(advert.id)}
                >
                  Delete
                </button>
                <button
                  className={styles.cancelBtn}
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    updatedData: state.authReducer.updatedData,
    deleteAdvert: state.advertReducer.deletedAdvert,
    location: state.advertReducer.location,
    label: state.advertReducer.label,
  };
};

export default connect(mapStateToProps, {
  updateFunc,
  deleteAdvert,
  searchProperties,
})(Modal);
