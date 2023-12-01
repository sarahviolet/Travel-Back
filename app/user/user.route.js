/*
Created By: Sarah Yun
Modified By: Sarah Yun, Nov/30/2023
*/

import { Router } from "express";
import { Auth, GetMyInfo, Login, Logout, Register, SavePostingOnOff } from "./user.controller.js";
import auth from '../middleware/auth.js';

const router = Router();

router.post('/api/users/register', Register);
router.post('/api/users/login', Login);
router.get('/api/users/auth', auth, Auth);
router.get('/api/users/logout', auth, Logout);

router.get('/api/users/myinfo', auth, GetMyInfo);
router.put('/api/users/savepostingonoff', auth, SavePostingOnOff);



export default router;