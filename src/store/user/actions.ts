import { action } from 'typesafe-actions'
import { userTypes, User } from './types'

export const userPending = () => action(userTypes.LOGIN_REQUEST_PENDING);

export const userSuccess = () => action(userTypes.LOGIN_REQUEST_SUCCESS);

export const userError = () => action(userTypes.LOGIN_REQUEST_ERROR);

export const userLogout = () => action(userTypes.LOGUOT_USER)