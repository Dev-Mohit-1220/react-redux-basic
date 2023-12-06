import { GET_USERS } from "./userActionTypes";
import axios from "axios";

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://65507ea97d203ab6626dd9bb.mockapi.io/api/v1/users`);
      
      dispatch({
        type: GET_USERS,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
};