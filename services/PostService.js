import axios from 'axios';

class PostService {
  async getAll() {
    try {
      const results = await axios.get('http://localhost:5000/cultura/posts');
      return results.data;
    } catch (e) {
      console.error(e);
    }
  }
}

export default new PostService();
