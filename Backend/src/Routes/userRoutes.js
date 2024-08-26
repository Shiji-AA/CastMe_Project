import express from 'express';
const router = express.Router();

import { facebookRegister, getUserProfile, googleLogin, googleRegister, loginUser, registerUser } from '../Controllers/userController.js';
import {isLogin} from '../../Middleware/userAuth.js';

router.post('/register', registerUser);
router.post('/',loginUser)
router.get('/info',isLogin, getUserProfile)
router.post('/google/register',googleRegister)
router.post('/google/login',googleLogin)
router.post('/facebook/register',facebookRegister)
//router.post('/facebook/login',facebookLogin)

export default router;
