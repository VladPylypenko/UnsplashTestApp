import {
  GET_PHOTOS,
  GET_PHOTOS_FULFILLED,
  GET_PHOTOS_REJECTED,
} from './actionTypes';

const initialState = {
  photos: [],
  title: 'TestApp',
  loading: true,
  errMessage: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {...state, loading: action.payload};
    case GET_PHOTOS_FULFILLED:
      return {
        ...state,
        photos: [...state.photos, ...action.payload],
        loading: action.loading,
      };
    case GET_PHOTOS_REJECTED:
      return {...state, errorMessage: action.payload, loading: action.loading};
    default:
      return state;
  }
};
