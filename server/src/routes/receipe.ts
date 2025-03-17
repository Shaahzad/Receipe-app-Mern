import express, { Router } from "express"
import { authMiddleware } from "../middleware/Authmiddleware"
import { CreateReceipe, getReceipe } from "../controllers/Receipe"

const router: Router = express.Router()

router.post("/create", authMiddleware, CreateReceipe)
router.get("/get", authMiddleware, getReceipe)

export default router