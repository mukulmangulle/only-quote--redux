
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    edit: {
      todo: {},
      editMode: false,
    },
  },
  reducers: {
    remove: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    },

    save: (state, action) => {
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    },

    edit: (state, action) => {
      return {
        ...state,
        edit: { todo: action.payload, editMode: true },
      };
    },

    update: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        edit: { todo: {}, editMode: false },
      };
    },
  },
});

export const { remove, save, edit, update } = todoSlice.actions;
export default todoSlice.reducer;
