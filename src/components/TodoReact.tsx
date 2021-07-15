import React, { useEffect, useState } from "react";
import { Todo } from "../types/todo";

const TodoReact = () => {
  const [todo, setTodo] = useState<Todo>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = await response.json();

      setTodo(data);
    };

    fetchData();
  }, []);

  if (!todo.id) {
    return <div className="p-4 bg-gray-50">Loading...</div>;
  }

  return (
    <div className="space-y-2">
      <div key={todo.id} className="p-4 bg-gray-50">
        {todo.title}
      </div>
    </div>
  );
};

export default TodoReact;
