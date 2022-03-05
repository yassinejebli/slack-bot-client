import axios from "axios";

const ENDPOINT_ROOT = process.env.REACT_APP_ENDPOINT_ROOT;

// TODO: pagination
export async function getUsers() {
  return (await axios.get(`${ENDPOINT_ROOT}/users`)).data;
}

export function deleteUser(userId) {
  return axios.delete(`${ENDPOINT_ROOT}/users/${userId}`);
}

export function inviteUser(data) {
  return axios.post(`${ENDPOINT_ROOT}/users`, data);
}
