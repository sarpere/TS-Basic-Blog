import { createStore, Store } from 'redux'
import { postState } from './post/types'
import { userState} from './user/types'
import rootReducer from './rootReducer'
export interface ApplicationState {
    post: postState,
    user: userState
}
const store: Store<ApplicationState> = createStore(rootReducer)

export default store;