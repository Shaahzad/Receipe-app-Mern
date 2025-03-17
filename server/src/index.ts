import express from "express"
import dotenv from "dotenv"
import connecttoDB from "./db/db"
import cors from "cors"
import AuthRoutes from "./routes/Auth"
import ReceiprRoutes from "./routes/receipe"

dotenv.config()

const app = express()

connecttoDB()
app.use(cors())
app.use(express.json())

app.use("/api/auth", AuthRoutes)
app.use("/api/receipe", ReceiprRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})