import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setProjects = (projects) => {
  return {
    type: actionTypes.SET_PROJECTS,
    projects: projects
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_PROJECT_FAILED
  };
};

export const initProjects = () => {
  return dispatch => {
    axios.get('projects')
      .then(response => {
        console.log(response)
        dispatch(setProjects(response.data));
      })
      .catch(error => {
        dispatch(fetchIngredientsFailed());
      });
  };
};

export const onGetProject = (projectId) => {
  return dispatch => {
    axios.get(`projects/2`
    ).then(response => {
      console.log(response, 'get project id')
      // dispatch(setProjects(response.data));
    }).catch(error => {
      dispatch(fetchIngredientsFailed());
    });
  };
};

