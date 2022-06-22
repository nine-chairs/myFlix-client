// src/reducers/reducers.js
import { combineReducers } from 'redux';

import {
  SET_FILTER,
  SET_MOVIES,
  SET_USER,
  ADD_FAV_MOVIE,
  REM_FAV_MOVIE
} from '../actions/actions';

function visibilityFilter(state = '', action) {
  switch (action.type) {
    case SET_FILTER:
      return action.value;
    default:
      return state;
  }
}

//Contains switch case for SET_MOVIES, ADD_FAVMOVIE, and REM_FAVMOVIE
function movies(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      return action.value;
    default:
      return state;
  }
}

function user(state = '', action) {
  switch (action.type) {
    case SET_USER:
      return action.user || localStorage.getItem('user') || '';
    case ADD_FAV_MOVIE:
      return action.value;
    case REM_FAV_MOVIE:
      return action.value;
    default:
      return state;
  }
}




const moviesApp = combineReducers({
  visibilityFilter,
  movies,
  user
});

export default moviesApp;