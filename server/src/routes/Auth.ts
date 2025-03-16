import express, { Router } from 'express';
import { registerUser } from '../controllers/Auth';


const router: Router = express.Router()

//  register route
router.post('/register', registerUser)
export default router