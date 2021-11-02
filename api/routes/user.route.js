import {Router} from "express";
const router = Router();

import * as userCtrl from '../controllers/user.controller.js';

router.post('/', userCtrl.createUser);

router.get('/', userCtrl.getUser);

router.get('/:productID', userCtrl.getUserByID);

router.put('/productID', userCtrl.updateUserByID);

router.delete('/productID', userCtrl.DeleteUserById);

export default router;