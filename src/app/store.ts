import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todosReducer from "../features/todos/todosSlice";

const store = configureStore({
  reducer: {
    counter1: counterReducer, // state => state.counter1
    todos:todosReducer,
  }
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;