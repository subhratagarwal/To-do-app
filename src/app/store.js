import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todosSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
