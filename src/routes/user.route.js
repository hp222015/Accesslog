import express from 'express';
import * as userController from '../controllers/user.controller';


const router = express.Router();

router.post('',userController.newUser);

router.post('/login',userController.login);

export default router;
