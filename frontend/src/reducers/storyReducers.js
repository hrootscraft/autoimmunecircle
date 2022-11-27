import {
  STORY_LIST_REQUEST,
  STORY_LIST_SUCCESS,
  STORY_LIST_FAIL,
  STORY_DETAILS_REQUEST,
  STORY_DETAILS_SUCCESS,
  STORY_DETAILS_FAIL,
} from "../constants/storyConstants";

export const storyListReducer = (state = { stories: [] }, action) => {
  switch (action.type) {
    case STORY_LIST_REQUEST:
      return { loading: true, stories: [] };
    case STORY_LIST_SUCCESS:
      return {
        loading: false,
        stories: action.payload,
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
    default:
      return state;
  }
};
