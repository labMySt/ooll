import  reducer  from 'redux-form';
import {
  AUTH_USER,
  UNAUTH_USER
} from '../actions/types';

const AuthReducer = function(state = { authenticated: false}, action) {

  switch(action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false};
  }
  return state;
};

export default AuthReducer;
