import express from "express"
import dotenv from "dotenv"
import connecttoDB from "./db/db"
import cors from "cors"
dotenv.config()

const app = express()

connecttoDB()
app.use(cors())
app.use(express.json())


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})