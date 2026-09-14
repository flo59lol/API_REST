import {Router} from 'express';
import ProductController from '../controllers/ProductController.js';

const productController = new ProductController();
const productRouter = Router();

productRouter.get('/products', productController.index);
productRouter.get('/products/:id', productController.show);
productRouter.post('/products', productController.create);
productRouter.put('/products/:id', productController.update);
productRouter.delete('/products/:id', productController.delete);

export default productRouter;