import { Reducer } from 'redux'
import { userState, userTypes } from './types'
const INITIAL_STATE: userState = {
    loggedIn: false ,
    error: false,
    pending: false
}

const reducer: Reducer<userState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypes.LOGIN_REQUEST_PENDING:
            return { ...state, pending: true, loggedIn: false }
        case userTypes.LOGIN_REQUEST_SUCCESS:
            return { ...state, pending: false, error: false, loggedIn: true }
        case userTypes.LOGIN_REQUEST_PENDING:
            return { ...state, pending: false, error: true, loggedIn: false }
        case userTypes.LOGUOT_USER:
            return { ...state, pending: false, error: false, loggedIn: false }
        default:
            return state;
    }
};
export default reducer;