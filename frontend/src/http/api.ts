import api from ".";

export const createTodo = (data: { title: string }) => api.post("/todo", data)
export const fetchTodo = () => api.get("/todo")