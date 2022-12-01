import {
  STORY_LIST_REQUEST,
  STORY_LIST_SUCCESS,
  STORY_LIST_FAIL,
  STORY_DETAILS_REQUEST,
  STORY_DETAILS_SUCCESS,
  STORY_DETAILS_FAIL,
  STORY_UPDATE_REQUEST,
  STORY_UPDATE_SUCCESS,
  STORY_UPDATE_FAIL,
  STORY_UPDATE_RESET,
  STORY_DETAILS_RESET,
  STORY_TOP_REQUEST,
  STORY_TOP_SUCCESS,
  STORY_TOP_FAIL,
} from "../constants/storyConstants";

export const storyListReducer = (state = { stories: [] }, action) => {
  switch (action.type) {
    case STORY_LIST_REQUEST:
      return { loading: true, stories: [] };
    case STORY_LIST_SUCCESS:
      return {
        loading: false,
        stories: action.payload.users,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case STORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const storyDetailsReducer = (state = { story: {} }, action) => {
  switch (action.type) {
    case STORY_DETAILS_REQUEST:
      return { loading: true, ...state };
    case STORY_DETAILS_SUCCESS:
      return { loading: false, story: action.payload };
    case STORY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case STORY_DETAILS_RESET:
      return { story: {} };
    default:
      return state;
  }
};

export const storyUpdateReducer = (state = { story: {} }, action) => {
  switch (action.type) {
    case STORY_UPDATE_REQUEST:
      return { loading: true };
    case STORY_UPDATE_SUCCESS:
      return { loading: false, success: true, story: action.payload };
    case STORY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case STORY_UPDATE_RESET:
      return { story: {} };
    default:
      return state;
  }
};

export const storyTopReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case STORY_TOP_REQUEST:
      return { loading: true, users: [] };
    case STORY_TOP_SUCCESS:
      return { loading: false, users: action.payload };
    case STORY_TOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
