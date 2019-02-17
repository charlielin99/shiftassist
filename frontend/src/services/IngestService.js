import { apiUrl } from "./ApiService";
import { post } from "axios";

export const send = ingestData => {
  return post("/change-reports", ingestData, {
    baseUrl: apiUrl
  });
};
