import * as yup from 'yup';

import { FIELD_REQUIRED } from './constants';

const ContactValidation = () => {
  let validation = {
    city: yup.string().required(FIELD_REQUIRED),
    sqft: yup.string().required(FIELD_REQUIRED),
    lat: yup.string().required(FIELD_REQUIRED),
    lon: yup.string().required(FIELD_REQUIRED),
    files: yup.string().required(FIELD_REQUIRED),
  };
  return yup.object().shape(validation);
};
export { ContactValidation };
