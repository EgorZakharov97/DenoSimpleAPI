import { Router } from 'https://deno.land/x/oak/mod.ts';
import {
    getProducts,
    getProduct,
    postProduct,
    updateProduct,
    deleteProduct
} from './controller.ts';

const router = new Router();

router.get('/', getProducts);

router
    .get('/:id', getProduct)
    .post('/:id', postProduct)
    .put('./:id', updateProduct)
    .delete('./:id', deleteProduct)
    

export default router