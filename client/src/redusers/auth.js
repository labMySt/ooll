import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_WINDOW_OPEN,
  AUTH_WINDOW_CLOSE,
  AUTH_SHOW_REGISTER_NOT,
  AUTH_SHOW_REGISTER_YES,
  ACTION_CHANGE_EMAIL,
  ACTION_CHANGE_PASSWORD,
  ACTION_CHANGE_PASSWORDCONF

} from '../actions/types';

const InitialState = {
  authenticated: false,
  registerWindow: false,
  showRegister: false,
  email: null,
  password: null,
  passwordConf: null
}

export default function auth(state = InitialState, action) {

  switch(action.type) {
    case AUTH_USER: return { ...state, authenticated: true };
    case UNAUTH_USER: return { ...state, authenticated: false };
    case AUTH_WINDOW_OPEN: return { ...state, registerWindow: true };
    case AUTH_WINDOW_CLOSE: return { ...state, registerWindow: false };
    case AUTH_SHOW_REGISTER_NOT: return { ...state, showRegister: false };
    case AUTH_SHOW_REGISTER_YES: return { ...state, showRegister: true };
    case ACTION_CHANGE_EMAIL: return {...state, email: action.payload};
    case ACTION_CHANGE_PASSWORD: return {...state, password: action.payload};
    case ACTION_CHANGE_PASSWORDCONF: return {...state, passwordConf: action.payload};
  }

  return state;
}
