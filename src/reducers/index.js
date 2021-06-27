import { combineReducers } from "redux";

import postsListReducer from './postsListReducer'
import authorReducer from './authorReducer'

export default combineReducers({
    posts: postsListReducer,
    users: authorReducer
})