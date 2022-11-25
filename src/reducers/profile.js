import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
} from "../actions/types";

const profile = {
  name: "Admin",
  username: "admin",
  email: "admin@gmail.com",
  phone: 9876543635,
  designation: "React Developer",
  department: "",
  dateofjoining: null,
  currentCTC: 15000,
  panCard: "",
  aadharcard: "",
  address: "",
  dateofbirth: null,
  bankDetail: "",
};

const initialState = { profile };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: payload.profile,
      };
    case GET_PROFILE_FAIL:
      return {
        ...state,
        profile: payload.profile,
      };
    default:
      return state;
  }
}
