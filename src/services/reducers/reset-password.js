import {
  VERIFICATION_EMAIL_REQUEST,
  VERIFICATION_EMAIL_SUCCESS,
  VERIFICATION_EMAIL_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
} from '../actions/reset-password';

const initialState = {
  emailRequest: false,
  emailRequestFailed: false,
  resetPasswordRequest: false,
  resetPasswordRequestFailed: false,
  verificationSent: false
};

export const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case VERIFICATION_EMAIL_REQUEST:
      return { ...state, emailRequest: true }
    case VERIFICATION_EMAIL_SUCCESS:
      return {
        ...state,
        emailRequest: false,
        verificationSent: action.payload,
      }
    case VERIFICATION_EMAIL_FAILED:
      return {
        ...state,
        emailRequest: false,
        emailRequestFailed: true,
      }
    case RESET_PASSWORD_REQUEST:
      return { ...state, resetPasswordRequest: true }
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordRequestFailed: false,
      }
    case RESET_PASSWORD_FAILED:
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordRequestFailed: true,
      }
    default:
      return state;
  }
}
