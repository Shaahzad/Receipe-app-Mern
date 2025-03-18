import express, { Router } from "express"
import { authMiddleware } from "../middleware/Authmiddleware"
import { CreateReceipe, getReceipe, getReceipebyId } from "../controllers/Receipe"

const router: Router = express.Router()

router.post("/create", authMiddleware, CreateReceipe)
router.get("/get", authMiddleware, getReceipe)
router.get("/get/:id", authMiddleware, getReceipebyId)

export default router