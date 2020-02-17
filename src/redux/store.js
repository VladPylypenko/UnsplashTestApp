import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from './reducer';
import {fetchData, fetchDataFulfilled, fetchDataRejected} from './actions';
import {service} from '../unsplashService';

export const getPhotos = () => {
  return async dispatch => {
    try {
      dispatch(fetchData(true));
      const res = await service();
      dispatch(fetchDataFulfilled(res));
    } catch (e) {
      dispatch(fetchDataRejected(e));
    }
  };
};

export const store = createStore(reducer, applyMiddleware(thunk));
