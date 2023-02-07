import { postForgotPassword, postResetPassword } from '../../API/api'

export const VERIFICATION_EMAIL_REQUEST = 'VERIFICATION_EMAIL_REQUEST';
export const VERIFICATION_EMAIL_SUCCESS = 'VERIFICATION_EMAIL_SUCCESS';//впервые получаем данные пользователя, токены и сохраняем куки.
export const VERIFICATION_EMAIL_FAILED = 'VERIFICATION_EMAIL_FAILED';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';//впервые получаем данные пользователя, токены и сохраняем куки.
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';

export function sentVerificationEmail(email, goToPage) {
  return function (dispatch) {
    dispatch({
      type: VERIFICATION_EMAIL_REQUEST
    });
    postForgotPassword(email)
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: VERIFICATION_EMAIL_SUCCESS,
            payload: res
          })
        }
      })
      .then(goToPage)
      .catch(e => {
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
        });
      }
    }).catch(e => {
      dispatch({
        type: RESET_PASSWORD_FAILED,
      });
    })
  }
}
