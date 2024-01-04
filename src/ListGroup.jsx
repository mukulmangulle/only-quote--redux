import React from "react";
import ListItem from "./ListIteam";
import { useSelector } from "react-redux";

const ListGroup = ({}) => {
  const { todos } = useSelector((state) => state.todos);

  return (
    <ul className="my-3 list-group">
      {todos.map((todo) => (
        <ListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ListGroup;

ListGroup.defaultProps = {
  numbers: [0],
};
