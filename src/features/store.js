
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todos/todoSlice";
import quouteReducer from "./quote/quoteSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    quotes: quouteReducer,
  },
});

export default store;
