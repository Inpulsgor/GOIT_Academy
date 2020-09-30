import axios from "axios";

const apiKey = "16769702-cf4aaa7b35c38ced44f900cbd";
axios.defaults.baseURL = "https://pixabay.com/api";

export const Fetch = (searchQuery, page) => {
  return axios(
    `/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => response.data.hits);
};
