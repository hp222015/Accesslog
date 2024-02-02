import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('',userController.register);

router.post('/login',newUserValidator,userController.login);

export default router;
