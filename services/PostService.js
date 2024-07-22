import axios from 'axios';

class PostService {
  async getAll({ offset = 0, limit = 4,issue=7 }) {
    console.log('entre:',offset)
    try {
      const results = await axios.get(`${import.meta.env.VITE_API_URL}/magazine/posts`, {
        params:{offset,limit,issue},
      });
      return results.data;
    } catch (e) {
      console.error(e);
    }
  }

  async getById({id}){
    try{
      const result = await axios.get(`${import.meta.env.VITE_API_URL}/magazine/posts/${id}`)
      return result.data
    }catch(e){
      console.error(e)
    }
  }

  async getAgenda({ offset = 0, limit = 4,issue = 7 }) {
    console.log('entre:',offset)
    try {
      const results = await axios.get(`${import.meta.env.VITE_API_URL}/magazine/agenda`, {
        params:{offset,limit,issue},
      });
      return results.data;
    } catch (e) {
      console.error(e);
    }
  }
}

export default new PostService();
