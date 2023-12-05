import { GET_USERS } from "./userActionTypes";

const initialState = {
  value: {},
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        value: action.payload,
      };
    default: 
    return state;
  }
};

export default UserReducer;