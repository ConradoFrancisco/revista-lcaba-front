import axios from 'axios';

class PostService {
  async getAll({ offset = 0, limit = 4 }) {
    console.log('entre:',offset)
    try {
      const results = await axios.get('http://localhost:5001/cultura/posts', {
        params:{offset,limit},
      });
      return results.data;
    } catch (e) {
      console.error(e);
    }
  }
}

export default new PostService();
