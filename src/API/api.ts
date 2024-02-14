import { type BaseResponse, get } from "./service";

interface GetDataResponse extends BaseResponse {
  sources: {
    id: string,
    name: string,
    description: string,
    url: string,
    category: string,
    language: string,
    country: string
  }[];
}

type params = {
  apiKey: string,
  country: string
}

export function getData(params: params) {
  return get<GetDataResponse>(
    `/top-headlines/sources?apiKey=${params.apiKey}&country=${params.country}`
  ).then((res) => res.sources);
}
