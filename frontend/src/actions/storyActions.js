import {
  STORY_LIST_SUCCESS,
  STORY_LIST_REQUEST,
  STORY_LIST_FAIL,
  STORY_DETAILS_REQUEST,
  STORY_DETAILS_SUCCESS,
  STORY_DETAILS_FAIL,
  STORY_DETAILS_RESET,
  STORY_UPDATE_REQUEST,
  STORY_UPDATE_SUCCESS,
  STORY_UPDATE_FAIL,
  STORY_TOP_REQUEST,
  STORY_TOP_SUCCESS,
  STORY_TOP_FAIL,
} from "../constants/storyConstants";
import axios from "axios";
import { logout } from "./userActions";

export const listStories =
  (pageNumber = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: STORY_LIST_REQUEST });
      const { data } = await axios.get(
        `/api/ai-stories/approved?pageNumber=${pageNumber}`
      );
      dispatch({
        type: STORY_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: STORY_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listStoryDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: STORY_DETAILS_REQUEST });

    // for restricting user to login for viewing whole story pass getState along with dispatch above
    // and the config below as second arg to axios request
    // const {
    //   userLogin: { userInfo },
    // } = getState();

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    const { data } = await axios.get(`/api/ai-stories/${id}`);
    dispatch({
      type: STORY_DETAILS_SUCCESS,
      payload: data[0],
    });
  } catch (error) {
    dispatch({
      type: STORY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateStory = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: STORY_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/ai-stories/${user._id}`,
      user,
      config
    );

    dispatch({ type: STORY_UPDATE_SUCCESS });

    dispatch({ type: STORY_DETAILS_SUCCESS, payload: data });

    dispatch({ type: STORY_DETAILS_RESET });
    document.location.href = "/admin/page/1";
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: STORY_UPDATE_FAIL,
      payload: message,
    });
  }
};

export const listTopStories = () => async (dispatch) => {
  try {
    dispatch({ type: STORY_TOP_REQUEST });

    const { data } = await axios.get(`/api/top-stories`);

    dispatch({
      type: STORY_TOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STORY_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
