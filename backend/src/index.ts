import dotenv from "dotenv"
import app from "./app";
import dbConnect from "./db/dbConnect";
dotenv.config();
const PORT = process.env.PORT;


dbConnect().then(() => {
    app.listen(PORT, () => {
        console.log(`Connected to PORT at ${PORT}`);
    })
}).catch((error) => {
    console.log("Error while connecting db, ", error);
    process.exit(1)
})


