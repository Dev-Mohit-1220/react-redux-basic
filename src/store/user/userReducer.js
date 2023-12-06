import { GET_USERS } from "./userActionTypes";

const initialState = {
  list: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        list: action.payload,
      };
    default: 
    return state;
  }
};

export default UserReducer;