import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { save, update } from "./features/todos/todoSlice";


const Form = () => {
  const { edit } = useSelector((state) => state.todos);

  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit.editMode) {
      dispatch(
        update({
          id: edit.todo.id,
          text,
        })
      );
    } else {
      dispatch(
        save({
          id: crypto.randomUUID(),
          text,
        })
      );
    }

    setText("");
  };
  useEffect(() => {
    setText(edit.todo.text);
  }, [edit]);

  return (
    <form className=" my-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control rounded-0 my-3"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button className="btn btn-success w-100 rounded-0">Save</button>
    </form>
  );
};

export default Form;

