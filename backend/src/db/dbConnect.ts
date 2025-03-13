import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("Connected to mongodb.");
        })

        mongoose.connection.on("error", (error) => {
            console.log("Error while connecting mongodb.", error);
            process.exit(1)
        })

        await mongoose.connect(process.env.DB_URI!)

    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

export default dbConnect;