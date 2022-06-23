import React, { Fragment, useState } from 'react';
import styles from './Modal.module.css';
import { RiCloseLine } from 'react-icons/ri';

import { Formik, Field, ErrorMessage, FormikConsumer, Form } from 'formik';
import TextError from './TextError';
import { matchPath, Prompt } from 'react-router-dom';

import FormikControl from './FormikControl';
import { ContactValidation } from './validation/validation';
import { connect } from 'react-redux';
import { addPropertyFunc } from '../../actions/advert';

const Modal = ({ setIsOpen, addPropertyFunc }) => {
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

  const mainSubmit = (values) => {
    addPropertyFunc(values);
  };

  const [errorTxt, setErrorTxt] = useState(true);

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Add New Property</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <div className={styles.modalContent}>
            <Formik
              validationSchema={ContactValidation([
                {
                  isForSale: '',
                  siteName: '',
                  featured: '',
                  siteDescription: '',
                  price: '',
                  address: '',
                  city: '',
                  sqft: '',
                  lat: '',
                  lon: '',
                  displayNameOpenMap: '',
                  agencyId: '',
                  siteImages: '',
                  files: '',
                },
              ])}
              enableReinitialize
              validateOnMount
              initialValues={{
                isForSale: '',
                siteName: '',
                featured: '',
                siteDescription: '',
                price: '',
                address: '',
                city: '',
                sqft: '',
                lat: '',
                lon: '',
                displayNameOpenMap: '',
                agencyId: '',
                siteImages: '',
                files: '',
              }}
              onSubmit={(values, actions) => {
                mainSubmit(values);
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
                      <div>
                        <div className="row">
                          <div className=" data-column">
                            <div className=" text-center  mb-4 ">
                              <div
                                role="group"
                                aria-labelledby="my-radio-group"
                              >
                                <label id="my-radio-group">Is For Sale</label>{' '}
                                &nbsp;
                                <label>
                                  <Field
                                    type="radio"
                                    name="isForSale"
                                    value="Yes"
                                  />
                                  &nbsp; Yes
                                </label>
                                &nbsp;&nbsp;
                                <label>
                                  <Field
                                    type="radio"
                                    name="isForSale"
                                    value="No"
                                  />
                                  &nbsp; No
                                </label>
                              </div>
                              {errorTxt && (
                                <ErrorMessage
                                  component={TextError}
                                  name="isForSale"
                                />
                              )}
                            </div>

                            <FormikControl
                              control="input"
                              type="text"
                              name="siteName"
                              label="SiteName"
                              value={values.siteName}
                              positiveValidation={false}
                              placeHolder=""
                              onKeyPress={handleChangeFunc}
                              {...propsvalues}
                              maxlength={25}
                              onBlur={handleBlur}
                            />
                            <div className="  text-center mb-4  ">
                              <div
                                role="group"
                                aria-labelledby="my-radio-group"
                              >
                                <label id="my-radio-group">Featured</label>
                                &nbsp;
                                <label>
                                  <Field
                                    type="radio"
                                    name="featured"
                                    value="Yes"
                                  />
                                  &nbsp; Yes
                                </label>
                                &nbsp;&nbsp;
                                <label>
                                  <Field
                                    type="radio"
                                    name="featured"
                                    value="No"
                                  />
                                  &nbsp; No
                                </label>
                              </div>
                              {errorTxt && (
                                <ErrorMessage
                                  component={TextError}
                                  name="featured"
                                />
                              )}
                            </div>

                            <FormikControl
                              control="textarea"
                              type="text"
                              name="siteDescription"
                              label="SiteDescription"
                              value={values.siteDescription}
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
                              name="price"
                              label="Price"
                              value={values.price}
                              positiveValidation={false}
                              placeHolder=""
                              onKeyPress={handleChangeFunc}
                              {...propsvalues}
                              maxlength={25}
                              onBlur={handleBlur}
                            />
                            <FormikControl
                              control="textarea"
                              type="text"
                              name="address"
                              label="Address"
                              value={values.address}
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
                              type="text"
                              name="displayNameOpenMap"
                              label="DisplayNameOpenMap"
                              value={values.displayNameOpenMap}
                              positiveValidation={false}
                              placeHolder=""
                              onKeyPress={handleChangeFunc}
                              {...propsvalues}
                              maxlength={25}
                              onBlur={handleBlur}
                            />

                            <FormikControl
                              control="input"
                              type="number"
                              name="agencyId"
                              label="AgencyId"
                              value={values.agencyId}
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
                              name="siteImages"
                              label="SiteImages"
                              value={values.siteImages}
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
                          <div className=" align-self-center action-column">
                            <div className="quote_btn">
                              <button
                                className={styles.submitBtn}
                                type="button"
                                onClick={(e) => handleSubmit(e)}
                                disabled={!formik.isValid}
                              >
                                Submit
                              </button>
                            </div>
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
  };
};

export default connect(mapStateToProps, { addPropertyFunc })(Modal);
