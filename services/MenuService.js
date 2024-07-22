import axios from 'axios';

class MenuService {
  async getMenus({pageId}) {
    try {
      const results = await axios.get(`${import.meta.env.VITE_API_URL}/menu/${pageId}`);
      return results.data;
    } catch (e) {
      console.error(e);
    }
  }
}

export default new MenuService();
