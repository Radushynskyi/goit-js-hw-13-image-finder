const keyApi = '18214315-6d256dcd609f984c8300aa163';
const baseUrl = 'https://pixabay.com/api/';

export default {
  page: 1,
  query: '',
  fetchImages() {
    const requestParams = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${keyApi}`;

    return fetch(baseUrl + requestParams)
      .then(response => response.json())
      .then(parsedResponce => {
        this.incrementPage();

        return parsedResponce.hits;
      });
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};