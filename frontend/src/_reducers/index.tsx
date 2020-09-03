import { combineReducers } from "redux";
import user from "./user_reducer";


//combineReduces가 각각의 reducer를 모아서 rootReducer로 보내준다.
const rootReducer = combineReducers({
    user
})

export default rootReducer;