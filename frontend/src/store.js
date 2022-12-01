import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  storyListReducer,
  storyDetailsReducer,
  storyUpdateReducer,
  storyTopReducer,
} from "./reducers/storyReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userListReducer,
  userDetailsReducer,
  postStoryReducer,
  userDeleteReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  storyList: storyListReducer,
  storyDetails: storyDetailsReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  storyUpdate: storyUpdateReducer,
  userList: userListReducer,
  userDetails: userDetailsReducer,
  postStory: postStoryReducer,
  userDelete: userDeleteReducer,
  storyTop: storyTopReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
