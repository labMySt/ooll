import {
  AUTH_USER,
  UNAUTH_USER
} from '../actions/types';


export default function auth(state = { authenticated: false}, action) {

  switch(action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false, admin_privileges: false };
  }

  return state;
}
