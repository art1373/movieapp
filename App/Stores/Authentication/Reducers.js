import {createReducer} from 'reduxsauce';
import {INITIAL_STATE} from './InitialState';
import {AuthTypes} from './Actions';

export const checkUserToken = (state, {token = null}) => ({
  ...state,
  token: token,
});
export const reducer = createReducer(INITIAL_STATE, {
  [AuthTypes.USER_LOGGED_IN]: checkUserToken,
});
