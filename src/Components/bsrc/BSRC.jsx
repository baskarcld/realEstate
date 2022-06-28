import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import styles from '../Form/Modal.module.css';
import { withRouter } from 'react-router';
import { Form, Formik } from 'formik';
import FormikControl from '../../Components/Form/FormikControl';
import { matchPath, Prompt } from 'react-router-dom';
import { SearchValidation } from '../../Components/Form/validation/validation';

import { searchProperties } from '../../actions/advert';
import location from '../../assets/images/icon/location.svg';
import property from '../../assets/images/icon/property.svg';
import dollarCircle from '../../assets/images/icon/dollar-circle.svg';
import area from '../../assets/images/icon/area.svg';

const initialState = {
  city: '',
  priceFrom: 1,
  priceTo: 10000000,
  forRent: true,
  forSale: true,
  noSearchTerm: false,
  minMoreThenMax: false,
  noRentNoSale: false,
};
const BSRC = (props) => {
  const [isValueChanged, setisValueChanged] = useState(false);
  const [submitConfirm, setSubmitConfirm] = useState(false);
  const [postsData, setpostsData] = useState([]);
  const handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeFunc = () => {
    setisValueChanged(true);
  };
  const mainSubmit = (val, label) => {
    props.searchProperties(val, label);
  };

  return (
    <div className="mt-[80px] lg:mt-[120px] xl:mt-[-160px] relative z-[2] pl-[40px] lg:pl-[50px] xl:pl-[0px]">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12 relative">
            <ul className="tab-nav search-tab inline-flex px-[15px] sm:px-[30px] py-[22px] border-l border-t border-r border-solid border-[#016450] border-opacity-25 rounded-tl-[15px] rounded-tr-[15px] bg-white">
              <li
                data-tab="buy"
                className="mr-[5px] sm:mr-[10px] md:mr-[46px] my-1 active"
              >
                <button className="font-lora leading-none px-[5px] sm:px-[10px] capitalize text-primary transition-all text-base xl:text-[22px] before:absolute before:left-auto before:right-0 before:bottom-[-32px] before:w-0 before:h-[2px] before:content-[''] before:bg-secondary relative before:transition-all ease-out">
                  Advanced Search
                </button>
              </li>
            </ul>

            <button
              className="tab-toggle-btn px-[10px] py-[15px] absolute bottom-[-56px] left-[-45px] border-l border-t border-b border-solid border-[#016450] bg-white text-primary border-opacity-25 rounded-tl-[10px] rounded-bl-[10px]"
              aria-label="svg icon"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 22V11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 7V2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22V17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 13V2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 22V11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 7V2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 11H7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 11H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 13H14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="col-span-12 selectricc-border-none">
            <div
              id="buy"
              className="tab-content bg-white border border-solid border-[#016450] border-opacity-25 rounded-bl-[15px] rounded-br-[15px] rounded-tr-[15px] px-[15px] sm:px-[30px] py-[40px] active"
            >
              <div className="advanced-searrch">
                <Formik
                  validationSchema={SearchValidation([
                    {
                      location: '',
                      amount_from: 0,
                      amount_to: 0,
                    },
                  ])}
                  enableReinitialize
                  validateOnMount
                  initialValues={{
                    location: '',
                    amount_from: 0,
                    amount_to: 0,
                  }}
                  onSubmit={(values, actions) => {
                    mainSubmit(values.location.value, values.location.label);
                    actions.setSubmitting(false);
                    actions.resetForm();
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
                                <div className="searchFormFieldAlign">
                                  <FormikControl
                                    control="select"
                                    value={values.location}
                                    onChange={setFieldValue}
                                    onBlur={setFieldTouched}
                                    options={
                                      props.dropdown &&
                                      props.dropdown.map((item) => ({
                                        label: item.name,
                                        value: item.value,
                                      }))
                                    }
                                    type="selectDropdown"
                                    name="location"
                                    label="Location"
                                    positiveValidation={false}
                                    {...propsvalues}
                                  />
                                </div>
                                <div className="searchFormFieldAlign">
                                  <FormikControl
                                    control="input"
                                    type="number"
                                    name="amount_from"
                                    label="Amount From"
                                    value={values.amount_from}
                                    positiveValidation={false}
                                    placeHolder=""
                                    onKeyPress={handleChangeFunc}
                                    {...propsvalues}
                                    maxlength={10}
                                    onBlur={handleBlur}
                                  />
                                </div>
                                <div className="searchFormFieldAlign">
                                  <FormikControl
                                    control="input"
                                    type="number"
                                    name="amount_to"
                                    label="Amount To"
                                    value={values.amount_to}
                                    positiveValidation={false}
                                    placeHolder=""
                                    onKeyPress={handleChangeFunc}
                                    {...propsvalues}
                                    maxlength={10}
                                    onBlur={handleBlur}
                                  />
                                </div>
                                <div className="searchFormFieldAlign actions">
                                  <button
                                    className={styles.submitBtnBtn}
                                    onClick={(e) => handleSubmit(e)}
                                    disabled={!formik.isValid}
                                  >
                                    Search
                                  </button>

                                  {submitConfirm && (
                                    <h4 className="text-secondary submittedMsg">
                                      Form submitted successfully!...
                                    </h4>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Form>
                      </>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dropdown: state.advertReducer.dropdown,
  };
};

export default connect(mapStateToProps, { searchProperties })(BSRC);
