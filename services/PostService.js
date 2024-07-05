import axios from 'axios';

class PostService {
  async getAll({ offset = 0, limit = 4 }) {
    console.log('entre:',offset)
    try {
      const results = await axios.get('http://localhost:5001/magazine/posts', {
        params:{offset,limit},
      });
      return results.data;
    } catch (e) {
      console.error(e);
    }
  }

  async getById({id}){
    try{
      const result = await axios.get(`http://localhost:5001/magazine/posts/${id}`)
      return result.data
    }catch(e){
      console.error(e)
    }
  }

}

export default new PostService();
