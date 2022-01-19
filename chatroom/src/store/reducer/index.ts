import { combineReducers } from "redux";
import messagesReducer from "./messages";

const rootReducer = combineReducers({
    messages: messagesReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;