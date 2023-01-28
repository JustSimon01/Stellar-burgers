import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT,
  USER_DATA_REQUEST,
  USER_DATA_SUCCESS,
  USER_DATA_FAILED,
  REFRESH_ACCESS_TOKEN_FAILED,
  REFRESH_ACCESS_TOKEN_SUCCESS,
  REFRESH_ACCESS_TOKEN_REQUEST
} from '../actions/login';
import { setCookie } from '../../utils/cooke';

const initialState = {
  loginRequest: false,
  loginRequestFailed: false,
  userDataLoaded: false,
  userDataRequest: false,
  userDataRequestFailed: false,
  accessTokenRequest: false,
  accessTokenRequestFailed: false,
  isAuthenticated: false,
  user: {
    email: "",
    name: ""
  },
  accessToken: "",
  refreshToken: ""
};

export const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loginRequest: true };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loginRequest: false,
        loginRequestFailed: false,
        userDataLoaded: true,
        isAuthenticated: true,
        user: action.payload.user,
        accessToken: action.payload.accessToken.split("Bearer ")[1],
        refreshToken: action.payload.refreshToken
      };
    case USER_LOGIN_FAILED:
      return { ...state, loginRequest: false, loginRequestFailed: true, };
    case USER_LOGOUT:
      return {
        ...state,
        loginRequest: false,
        loginRequestFailed: false,
        userDataRequest: false,
        userDataRequestFailed: false,
        isAuthenticated: false,
        user: {
          email: "",
          name: ""
        },
        accessToken: "",
        refreshToken: ""
      };
    case USER_DATA_REQUEST:
      return { ...state, userDataRequest: true };
    case USER_DATA_SUCCESS:
      console.log(action.payload.user);
      return {
        ...state,
        userDataRequest: false,
        userDataLoaded: true,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case USER_DATA_FAILED:
      return { ...state, userDataRequest: false, userDataRequestFailed: true, };
    case REFRESH_ACCESS_TOKEN_REQUEST:
      return { ...state, accessTokenRequest: true };
    case REFRESH_ACCESS_TOKEN_SUCCESS:
      return {
        ...state,
        accessTokenRequest: false,
        accessTokenRequestFailed: false,
        accessToken: action.payload.accessToken.split("Bearer ")[1],
        refreshToken: action.payload.refreshToken
      };
    case REFRESH_ACCESS_TOKEN_FAILED:
      return { ...state, accessTokenRequestFailed: false, };
    default:
      return state;
  }
}
