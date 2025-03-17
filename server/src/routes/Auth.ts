import express, { Router } from 'express';
import { loginUser, registerUser } from '../controllers/Auth';


const router: Router = express.Router()

//  register route
router.post('/register', registerUser)
router.post("/login", loginUser)

export default router