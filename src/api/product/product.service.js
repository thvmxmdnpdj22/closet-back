import models from '../../models';

export default class ProductService {
    constructor() { }

    /**
     * 모든 상품 조회
     */
    async getProducts() {
        try {
            // 모든 상품을 조회합니다.
            const products = await models.Product.findAll();
            return products;
        } catch (error) {
            throw error;
        }
    }

    /**
     * 상품 등록
     * @param {Object} productData 등록할 상품 데이터
     */
    async addProduct(productData) {
        try {
            // 상품을 등록합니다.
            const newProduct = await models.Product.create(productData);
            return newProduct;
        } catch (error) {
            throw error;
        }
    }
}
