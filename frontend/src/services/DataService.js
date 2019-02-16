import { apiKey, apiUrl } from "./ApiService";

import { get } from "axios";

const defaultOptions = {
  baseURL: apiUrl,
  params: {
    key: apiKey
  }
};

export const getNurses = id => {
  return getUrl("/nurses/", id);
};

export const getPatients = id => {
  return getUrl("/patients/", id);
};

export const getChangeReport = id => {
  return getUrl("/change-reports/", id);
};

function getUrl(url, id) {
  const u = url + (id ? id : "");
  return get(u, defaultOptions)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
}
