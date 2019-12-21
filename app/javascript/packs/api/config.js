import axios from 'axios';
import qs from 'qs';

class ApiClient {
  constructor (options = {}) {
    // var token = document.getElementsByName('csrf-token')[0].content;
    this.api = axios.create({
      baseURL: options.apiUrl,
      timeout: 61000,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': {
          toString() {
            return document.getElementsByName('csrf-token')[0].content;
          }
        }
        // 'X-CSRF-Token': token
      },
    });

    this.api.defaults.withCredentials = true;
  }

  fetch = (url, params) => {
    return this.api.get(url).then(res => {
      return res.data;
    });
  }

  post = (url, params) => {
    return this.api.post(url + this.buildQueryString(params)).then(res => {
      return res.data;
    });
  }

  delete = (url) => {
    return this.api.delete(url).then(res => {
      return res.data;
    });
  }

  fetchAll = (url, params) => {
    return this.api.get(url).then(res => {
      const {
        results,
        total,
        total_pages
      } = res.data;s

      const result = {
        data: results,
        meta: {
          total,
        }
      };

      return result;
    });
  }

  buildQueryString(params) {
    console.log({params});
    const result = qs.stringify(params, { arrayFormat: 'brackets', encodeValuesOnly: true });

    return result ? `?${result}` : '';
  }
}

const apiUrl = 'http://localhost:4000/';

const apiClient = new ApiClient({
  apiUrl: apiUrl,
});

export default apiClient;
