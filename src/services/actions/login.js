import { login, logout, getUser, resetToken, updateUser } from '../../API/api'
import { setCookie, getCookie, deleteCookie } from '../../utils/cooke';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';//впервые получаем данные пользователя, токены и сохраняем куки.
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
export const USER_LOGOUT = 'USER_LOGOUT';

export const USER_DATA_REQUEST = 'USER_DATA_REQUEST';
export const USER_DATA_SUCCESS = 'USER_DATA_SUCCESS';//получаем только данные по сохраненным accessToken в куках
export const USER_DATA_FAILED = 'USER_DATA_FAILED';//рефрешим accessToken в куках через REFRESH_ACCESS_TOKEN_REQUEST

export const USER_DATA_UPDATE_REQUEST = 'USER_DATA_REQUEST';
export const USER_DATA_UPDATE_SUCCESS = 'USER_DATA_UPDATE';
export const USER_DATA_UPDATE_FAILED = 'USER_DATA_FAILED';//рефрешим accessToken в куках через REFRESH_ACCESS_TOKEN_REQUEST

export const REFRESH_ACCESS_TOKEN_REQUEST = 'REFRESH_ACCESS_TOKEN_REQUEST';
export const REFRESH_ACCESS_TOKEN_SUCCESS = 'REFRESH_ACCESS_TOKEN_SUCCESS';//рефрешим accessToken и отправляем запрос на данные
export const REFRESH_ACCESS_TOKEN_FAILED = 'REFRESH_ACCESS_TOKEN_FAILED';//идем на страницу логина

export function loginUser(userInfo) {
  // Воспользуемся первым аргументом из усилителя redux-thunk — dispatch
  return function (dispatch) {
    dispatch({
      type: USER_LOGIN_REQUEST
    });
    login(userInfo).then(res => {
      if (res && res.success) {
        setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
        setCookie('refreshToken', res.refreshToken);
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: res
        });
      }
    }).catch(e => {
      dispatch({
        type: USER_LOGIN_FAILED,
      });
    })
  }
}

export function userLogout(goToPage) {
  return function (dispatch) {
    dispatch({
      type: USER_LOGOUT
    });
    logout().then(res => {
      if (res && res.success) {
        deleteCookie('accessToken');
        deleteCookie('refreshToken');
        goToPage();
      }
    })
  }
}

export function getUserData() {
  return function (dispatch) {
    dispatch({
      type: USER_DATA_REQUEST
    });
    getUser().then(res => {
      if (res && res.success) {
        dispatch({
          type: USER_DATA_SUCCESS,
          payload: res
        });
      }
    }).catch(e => {
      dispatch({
        type: USER_DATA_FAILED,
      });
      dispatch(refreshToken());
    })
  }
}

export function refreshToken() {
  return function (dispatch) {
    dispatch({
      type: REFRESH_ACCESS_TOKEN_REQUEST
    });
    resetToken().then(res => {
      if (res && res.success) {
        dispatch({
          type: REFRESH_ACCESS_TOKEN_SUCCESS,
          payload: res
        });
        setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
        setCookie('refreshToken', res.refreshToken);
        dispatch(getUserData());
      }
    }).catch(e => {
      dispatch({
        type: REFRESH_ACCESS_TOKEN_FAILED,
      })
    })
  }
}

export function updateUserData(data) {
  return function (dispatch) {
    dispatch({
      type: USER_DATA_UPDATE_REQUEST
    });
    updateUser(data).then(res => {
      if (res && res.success) {
        dispatch({
          type: USER_DATA_UPDATE_SUCCESS,
          payload: res
        });
      }
    }).catch(e => {
      dispatch({
        type: USER_DATA_UPDATE_FAILED,
      });
    })
  }
}

