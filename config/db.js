import mongoose from "mongoose";

export const connectDB = async ()=>{
    const MongoDb_URL = "mongodb+srv://raj1234:raj1234@cluster0.jndbx6h.mongodb.net/express"

    await mongoose.connect(MongoDb_URL).then(()=>{
        console.log("Database is connected")
})

}