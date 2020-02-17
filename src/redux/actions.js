import {
  GET_PHOTOS,
  GET_PHOTOS_FULFILLED,
  GET_PHOTOS_REJECTED,
} from './actionTypes';

export const fetchData = bool => {
  return {
    type: GET_PHOTOS,
    payload: bool,
  };
};

export const fetchDataFulfilled = data => {
  return {
    type: GET_PHOTOS_FULFILLED,
    payload: data,
    loading: false,
  };
};

export const fetchDataRejected = error => {
  return {
    type: GET_PHOTOS_REJECTED,
    payload: error,
    loading: false,
  };
};
