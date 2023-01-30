/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable arrow-body-style */
import { GOOGLE_AUTH_URL } from "../utils/urls";

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export default function getGoogleToken() {
  return fetch(GOOGLE_AUTH_URL, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
}
