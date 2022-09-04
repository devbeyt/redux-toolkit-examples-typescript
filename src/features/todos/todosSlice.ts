import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
    id: string;
    description: string;
    completed: boolean;
  }

const initialState = [
    {id:"1",description:"read book",completed:false},
    {id:"1",description:"Do sport",completed:false},
] as Todo[];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload);
      },
      prepare: (description: string) => ({
        payload: {
          id: nanoid(),
          description,
          completed: false,
        } as Todo,
      }),
    },
    removeTodo(state, action: PayloadAction<string>) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
    setTodoStatus(
      state,
      action: PayloadAction<{ completed: boolean; id: string }>
    ) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
  },
});

export const { addTodo, removeTodo, setTodoStatus } = todosSlice.actions;
export default todosSlice.reducer;