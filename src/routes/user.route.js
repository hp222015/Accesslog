import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('',userController.newUser);

router.post('/login',userAuth,newUserValidator,userController.login);

export default router;
