import axios from "axios";

const ENDPOINT_ROOT = process.env.REACT_APP_ENDPOINT_ROOT;

// TODO: pagination
export function getUsers() {
  return axios.get(`${ENDPOINT_ROOT}/users`).then((response) => response.data);
}

export function deleteUser(userId, teamId) {
  return axios.delete(`${ENDPOINT_ROOT}/users`).then((response) => response.ok);
}
