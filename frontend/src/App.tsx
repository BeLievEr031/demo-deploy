import { useEffect, useState } from "react"
import { createTodo, fetchTodo } from "./http/api";

function App() {
  const [todo, setTodo] = useState<{ title: string, _id: string }[] | []>([])
  const [title, setTitle] = useState("")
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchTodo();
        setTodo(data.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [])

  const handleAdd = async () => {
    try {

      console.log({
        title
      });

      const data = await createTodo({ title })
      console.log(data);
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        {
          todo.map((item) => {
            return <div>
              <span>{item.title}</span>
              <span>{item._id}</span>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App