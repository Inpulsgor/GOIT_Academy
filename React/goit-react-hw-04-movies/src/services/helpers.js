import queryString from "query-string";

export const sortTrending = (data) => {
  data.map((item) => item.name);
};

export const getQueryParams = (params) => {
  return queryString.parse(params);
};
