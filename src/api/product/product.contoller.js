import ProductService from './product.service';
import { Container } from 'typedi';

export default [
    /**
     * 상품 목록 조회
     */
    {
        path: '/products',
        method: 'get',
        middleware: [],
        controller: async (req, res, next) => {
            try {
                const productService = Container.get(ProductService);
                const products = await productService.getProducts();

                return res.status(200).json(products);
            } catch (error) {
                return res.status(500).json({ error: error.message });
            }
        }
    },

    /**
     * 상품 등록
     */
    {
        path: '/products',
        method: 'post',
        middleware: [],
        controller: async (req, res, next) => {
            try {
                const productService = Container.get(ProductService);
                const newProduct = await productService.addProduct(req.body);

                return res.status(201).json(newProduct);
            } catch (error) {
                return res.status(500).json({ error: error.message });
            }
        }
    }
];
