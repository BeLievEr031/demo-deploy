import { model, Schema } from "mongoose"

interface ITodo {
    title: string;
}

const todoSchema = new Schema<ITodo>({
    title: {
        type: String,
        required: true,
        trim: true
    }
})

const Todo = model<ITodo>("Todo", todoSchema)
export default Todo;