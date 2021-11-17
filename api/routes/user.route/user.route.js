import {Router} from "express";
import * as userCtrl from '../../controllers/user.controller/user.controller.js';
import { authJWT, checkDup } from "../../middlewares/index.js";

const router = Router();

router.post('/', [authJWT.verifyToken, checkDup.checkDuplicateUsernameorEmail], userCtrl.createUser);

router.get('/', userCtrl.getUser);

router.get('/:userID', userCtrl.getUserByID);

router.put('/:userID',[authJWT.verifyToken], userCtrl.updateUserByID);

router.delete('/:userID', [authJWT.verifyToken], userCtrl.DeleteUserById);

export default router;