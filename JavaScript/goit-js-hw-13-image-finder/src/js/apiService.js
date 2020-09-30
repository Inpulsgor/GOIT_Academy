import axios from 'axios';
// basicURL: `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.key}`,

const api = {
  apiKey: '16769702-cf4aaa7b35c38ced44f900cbd',
  searchQuery: '',
  page: 1,

  async getImage() {
    const res = await axios.get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${this.apiKey}`,
    );
    this.page += 1;
    // console.log(res);
    // console.log(res.data.hits);
    return res.data.hits;
  },

  resetPage() {
    this.page = 1;
  },
  set query(newValue) {
    this.searchQuery = newValue;
  },
  get query() {
    return this.searchQuery;
  },
};

export default api;
