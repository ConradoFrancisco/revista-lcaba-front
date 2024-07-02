import axios from 'axios';

class MenuService {
  async getMenus({pageId}) {
    try {
      const results = await axios.get(`http://localhost:5001/menu/${pageId}`);
      
      return results.data;
    } catch (e) {
      console.error(e);
    }
  }
}

export default new MenuService();
