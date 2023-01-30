import { postForgotPassword, postResetPassword } from '../../API/api'

export const VERIFICATION_EMAIL_REQUEST = 'USER_LOGIN_REQUEST';
export const VERIFICATION_EMAIL_SUCCESS = 'USER_LOGIN_SUCCESS';//впервые получаем данные пользователя, токены и сохраняем куки.
export const VERIFICATION_EMAIL_FAILED = 'USER_LOGIN_FAILED';

export const RESET_PASSWORD_REQUEST = 'USER_LOGIN_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'USER_LOGIN_SUCCESS';//впервые получаем данные пользователя, токены и сохраняем куки.
export const RESET_PASSWORD_FAILED = 'USER_LOGIN_FAILED';

export function sentVerificationEmail(email) {
  return function (dispatch) {
    dispatch({
      type: VERIFICATION_EMAIL_REQUEST
    });
    postForgotPassword(email).then(res => {
      if (res && res.success) {
        dispatch({
          type: VERIFICATION_EMAIL_SUCCESS,
          payload: res
        });
      }
    }).catch(e => {
      dispatch({
        type: VERIFICATION_EMAIL_FAILED,
      });
    })
  }
}

export function resetPassword(password, token) {
  return function (dispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST
    });
    postResetPassword(password, token).then(res => {
      if (res && res.success) {
        dispatch({
          type: RESET_PASSWORD_SUCCESS,
          payload: res
        });
      }
    }).catch(e => {
      dispatch({
        type: RESET_PASSWORD_FAILED,
      });
    })
  }
}
