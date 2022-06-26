import axios from 'axios';
import { newError } from './error';

let baseUrl = 'https://rms.cloudinlabs.com/api/sites';

const FETCH_ALL_ADVERTS = 'FETCH_ALL_ADVERTS';

const FETCH_ONE_ADVERT = 'FETCH_ONE_ADVERT';

const DELETE_ADVERT = 'DELETE_ADVERT';
const ADD_NEW_PROPERTY = 'ADD_NEW_PROPERTY';
const UPDATE_SITE = 'UPDATE_SITE';
const BROKER_ACTION = 'BROKER_ACTION';
const SEARCH_PROPERTIES = 'SEARCH_PROPERTIES';

const advertsFetchSuccess = (adverts) => ({
  type: FETCH_ALL_ADVERTS,
  adverts: adverts.data,
});

export const fetchAdverts = () => (dispatch) => {
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('token')}`;
  axios
    .get(`${baseUrl}`)
    .then((response) => {
      console.log(response);
      dispatch(advertsFetchSuccess(response));
    })
    .catch((err) => dispatch(newError(err.response)));
};

const advertFetchSuccess = (advert, id) => ({
  type: FETCH_ONE_ADVERT,
  advert: advert,
  id,
});

export const fetchAdvert = (id) => (dispatch) => {
  axios
    .get(`${baseUrl}/${id}`)
    .then((res) => {
      dispatch(advertFetchSuccess(res.data, id));
    })
    .catch((err) => dispatch(newError(err.response)));
};

const updateSuccess = (updatedData) => ({
  type: UPDATE_SITE,
  updatedData: updatedData,
});

export const updateFunc = (data, id) => (dispatch) => {
  var bodyFormData = new FormData();
  bodyFormData.append('id', id);
  bodyFormData.append('city', data.city);
  bodyFormData.append('sqft', data.sqft);
  bodyFormData.append('lat', data.lat);
  bodyFormData.append('lon', data.lon);
  bodyFormData.append('files', data.files);
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('token')}`;
  axios({
    method: 'post',
    url: baseUrl,
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then((response) => {
      dispatch(fetchAdverts());
    })
    .catch(function (response) {});
};

const deleteAdvertSuccess = (advert, id) => ({
  type: DELETE_ADVERT,
  advert: advert,
  id,
});

export const deleteAdvert = (id) => (dispatch) => {
  axios
    .delete(`${baseUrl}/${id}`)
    .then((res) => {
      dispatch(deleteAdvertSuccess(res.data, id));
    })
    .catch((err) => dispatch(newError(err.response)));
};

const addPropertySuccess = (newdata) => ({
  type: ADD_NEW_PROPERTY,
  newdata: newdata,
});

export const addPropertyFunc = (data) => (dispatch, getState) => {
  var bodyFormData = new FormData();

  bodyFormData.append('isForSale', data.isForSale === 'Yes' ? true : false);
  bodyFormData.append('siteName', data.siteName);
  bodyFormData.append('featured', data.featured === 'Yes' ? true : false);
  bodyFormData.append('siteDescription', data.siteDescription);
  bodyFormData.append('price', data.price);
  bodyFormData.append('address', data.address);
  bodyFormData.append('city', data.city);
  bodyFormData.append('sqft', data.sqft);
  bodyFormData.append('lat', data.lat);
  bodyFormData.append('lon', data.lon);
  bodyFormData.append('displayNameOpenMap', data.displayNameOpenMap);
  bodyFormData.append('agencyId', data.agencyId);
  bodyFormData.append('siteImages', data.siteImages);
  bodyFormData.append('files', data.files);
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('token')}`;

  axios({
    method: 'post',
    url: baseUrl,
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then(function (response) {
      dispatch(fetchAdverts());
    })
    .catch(function (response) {
      //handle error
    });
};

//Book / Reserve /Cancel
const brokerActionSuccess = (brokerAction) => ({
  type: BROKER_ACTION,
  brokerActionData: brokerAction.data,
});

export const brokerAction = (id, type) => (dispatch) => {
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('token')}`;
  axios
    .get(`${baseUrl}/${id}/${type}`)
    .then((response) => {})
    .catch((err) => dispatch(newError(err.response)));
};

//Search
const searchSuccess = (searchData, location, label) => ({
  type: SEARCH_PROPERTIES,
  searchData: searchData.data,
  location: location,
  label: label,
});

export const searchProperties = (location, label) => (dispatch) => {
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('token')}`;
  if (location) {
    axios
      .get(`${baseUrl}?location=${location}`)
      .then((response) => {
        console.log(response, location, label);
        dispatch(searchSuccess(response, location, label));
      })
      .catch((err) => dispatch(newError(err.response)));
  } else {
    axios
      .get(`${baseUrl}?location=1`)
      .then((response) => {
        dispatch(searchSuccess(response, location, 'Erode'));
      })
      .catch((err) => dispatch(newError(err.response)));
  }
};
