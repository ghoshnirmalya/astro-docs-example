import React, { FC } from "react";
import { Todo } from "../types/todo";

interface IProps {
  todo: Todo;
}

const TodoReact: FC<IProps> = ({ todo }) => {
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
