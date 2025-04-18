import api from "..";

const productImageService = {
  // Complexity is 5 Everything is cool!
  async getProducts() {
    try {
      const response = await api.get('/products/');
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("xatolik:", error);
      throw error;
    }
  },

  // Complexity is 5 Everything is cool! 
  async getProductById(id: number | string) {
    try {
      const response = await api.get(`/products/${id}/`);
      return response.data;
    } catch (error) {
      console.error(`Product ID: ${id} ni olishda xatolik:`, error);
      throw error;
    }
  },

  // Complexity is 5 Everything is cool!
  async createProduct(productData: object) {
    try {
      const response = await api.post('/products/', productData);
      return response.data;
    } catch (error) {
      console.error("Product yaratishda xatolik:", error);
      throw error;
    }
  }
};
export default productImageService