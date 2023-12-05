import { GET_USERS } from "./userActionTypes";
import axios from "axios";

const getUsers = async () => {
  let users = { data: "test"};
  await axios
    .get(`https://65507ea97d203ab6626dd9bb.mockapi.io/api/v1/users`)
    .then((result) => {
      users = result;
    })
    .catch(error => {
        users = error
    });
  return {
    type: GET_USERS,
    payload: users,
  };
};

export { getUsers };
