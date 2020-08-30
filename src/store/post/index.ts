import { Reducer } from 'redux'
import { postState, postTypes } from './types'
const INITIAL_STATE: postState = {
    data: [],
    error: false,
    pending: false
}

const reducer: Reducer<postState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case postTypes.GET_POST_PENDING:
            return { ...state, pending: true }
        case postTypes.GET_POST_SUCCESS:
            return { ...state, pending: false, error: false, data: action.payload }
        case postTypes.GET_POST_ERROR:
            return { ...state, pending: false, error: true, data: [] }
        default:
            return state;
    }

};
export default reducer;