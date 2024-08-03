import express from 'express';
const router = express.Router();

import { getUserProfile, loginUser, registerUser } from '../Controllers/userController.js';
import {isLogin} from '../../Middleware/userAuth.js';

router.post('/register', registerUser);
router.post('/',loginUser)
router.get('/info',isLogin, getUserProfile)

export default router;
