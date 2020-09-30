import axios from "axios";

const key = "7e5a82b062afaf281b235a5fc32d35ad";
axios.defaults.baseURL = "https://api.themoviedb.org";

export const getTrending = () => 
  axios(`/3/trending/movie/week?api_key=${key}`);

export const getSearch = (searchQuery) =>
  axios(`/3/search/movie?api_key=${key}&query=${searchQuery}`);

export const getInfo = (id) => axios(`/3/movie/${id}?api_key=${key}`);

export const getCredits = (id) =>
  axios(`/3/movie/${id}/credits?api_key=${key}`);

export const getReviews = (id) =>
  axios(`/3/movie/${id}/reviews?api_key=${key}`);