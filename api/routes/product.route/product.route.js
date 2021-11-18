import {Router} from "express";
import * as productCtrl from '../../controllers/product.controller/product.controller.js';
import { authJWT } from "../../middlewares/index.js";

const router = Router();

router.post('/', [authJWT.verifyToken], productCtrl.createProduct);

router.get('/', productCtrl.getProduct);

router.get('/:productID', productCtrl.getProductByID);

router.put('/:productID',[authJWT.verifyToken], productCtrl.updateProductByID);

router.delete('/:productID', [authJWT.verifyToken], productCtrl.DeleteProductById);

export default router;