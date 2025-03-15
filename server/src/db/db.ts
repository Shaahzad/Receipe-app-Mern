import mongoose from "mongoose";

const connecttoDB = async(): Promise<void>=> {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI as string)
        console.log(`MongoDB connected: ${connection.connection.host}`)
    } catch (error) {
      console.log(error)
      process.exit(1)
    }

}


export default connecttoDB