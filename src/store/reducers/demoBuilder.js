import * as actionTypes from '../actions/actionTypes';

const initialState = {
  'jwt-token': null,
  isSigIn: false,
  projects: null,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PROJECTS:
      return {
        ...state,
        projects: action.projects,
        error: false
      };
    case actionTypes.FETCH_PROJECT_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
