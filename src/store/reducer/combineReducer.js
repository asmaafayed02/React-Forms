import { combineReducers } from "redux";

import reducer from "./reducer"
import movies from "./movieReducer"
export default combineReducers({
    favorite : reducer,
    movies : movies
})