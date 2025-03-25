import express, { Request, Response } from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import Todo from "./model/Todo";
const app = express();

app.use(express.json({ limit: "1MB" }))
app.use(express.urlencoded({ extended: true, limit: "1MB" }))
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: ["http://localhost:5173"]
}))

app.post("/todo", async (req: Request, res: Response) => {
    try {
        const { title } = req.body;
        const newTodo = await Todo.create({
            title
        });
        console.log(req.ip);
        res.status(200).json({
            ip: req.ip
        })
    } catch (error) {
        console.log(error);
    }
})

app.get("/todo", async (req: Request, res: Response) => {
    try {
        const todo = await Todo.find({});
        console.log("i am runing");

        res.status(200).json(todo)
    } catch (error) {
        console.log(error);
    }
})

export default app;