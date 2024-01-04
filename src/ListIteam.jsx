import React from "react";
import { useDispatch } from "react-redux";
import { edit, remove } from "./features/todos/todoSlice";

const ListItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const handleEdit = (todo) => {
    dispatch(edit(todo));
  };

  return (
    <li className="list-group-item rounded-0">
      {todo.text}
      <button
        className="btn btn-sm btn-danger rounded-0 float-end"
        onClick={() => handleRemove(todo.id)}
      >
        Delete
      </button>
      <button
        className="btn btn-sm btn-warning rounded-0 float-end"
        onClick={() => handleEdit(todo)}
      >
        Edit
      </button>
    </li>
  );
};

export default ListItem;

