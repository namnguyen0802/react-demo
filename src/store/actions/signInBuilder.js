import * as actionTypes from './actionTypes';
import axios from 'axios';

export const onSignInSuccess = (data) => {
  return {
    type: actionTypes.SIGN_IN_SUCCESS,
    isSigIn: true,
    data: data
  };
};

export const onSignInFailed = () => {
  return {
    type: actionTypes.SIGN_IN_FAILED
  };
};

export const signIn = () => {
  return dispatch => {
    axios.post('sign-in')
      .then(response => {
        console.log(response)
        dispatch(onSignInSuccess(response.data));
      })
      .catch(error => {
        dispatch(onSignInFailed());
      });
  };
};
