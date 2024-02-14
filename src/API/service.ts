import axios, { type AxiosResponse } from "axios";

const instance = axios.create({
  timeout: 60000,
});
const responseBody = (response: AxiosResponse) => response.data;
const API_GATEWAY = 'https://newsapi.org/v2'

export interface BaseResponse {
  status: string;
}


export function get<T>(
  req: string,
): Promise<T> {
  return instance
    .get(
      API_GATEWAY + req,
      {}
    )
    .then(responseBody)
    .catch((err: Error) => {throw err});
}