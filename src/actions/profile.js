import {
  SET_MESSAGE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
} from "./types";

import userService from "../services/user.service";

/*(export const addProfile = () => (dispatch) => {
    return userService.getProfileDetail().then(
      (response) => {
        dispatch({
          type: GET_PROFILE_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: GET_PROFILE_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
*/
export const getProfile = () => (dispatch) => {
  return userService.getProfileDetail().then(
    (response) => {
      dispatch({
        type: GET_PROFILE_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });
      console.log("---------",response.data)
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: GET_PROFILE_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
