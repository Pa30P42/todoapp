// import {ITask} from '@/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Todo} from '../types';

const TODOS_STORAGE_KEY = 'todos';

const mockTodos = [
  {
    id: 1,
    title: 'Friend birthday party',
    completed: false,
    category: 'event',
    time: '4:00 P.M',
  },
  {
    id: 2,
    title: 'Wash dishes',
    completed: false,
    category: 'task',
    time: '4:00 P.M',
  },
  {
    id: 3,
    title: 'Anniversary day',
    completed: false,
    category: 'event',
    time: '4:00 P.M',
  },
  {
    id: 4,
    title: 'Complete 30 push-ups',
    completed: true,
    category: 'goal',
    time: '4:00 P.M',
  },
  {
    id: 5,
    title: 'Study programming',
    completed: true,
    category: 'task',
    time: '4:00 P.M',
  },
  {
    id: 6,
    title: 'Study English',
    completed: true,
    category: 'event',
    time: '4:00 P.M',
  },
  {
    id: 7,
    title: 'Buy flat',
    completed: true,
    category: 'goal',
    time: '4:00 P.M',
  },
];

const initialState: Todo[] = mockTodos;

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.unshift(action.payload);
      saveTodosToStorage(state);
    },
    toggleTodo: (state, action) => {
      const todo = state.find(task => task.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
        saveTodosToStorage(state);
      }
    },
    searchTodo: (state, action: PayloadAction<string>) => {
      const searchedTodo = action.payload.toLowerCase();
      console.log('searchedTodo', searchedTodo.length);

      return state.filter(todo =>
        todo.title.toLowerCase().includes(searchedTodo),
      );
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
        saveTodosToStorage(state);
      }
    },
  },
});

const saveTodosToStorage = (todos: Todo[]) => {
  AsyncStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
    .then(() => console.log('Tasks saved to AsyncStorage'))
    .catch(error =>
      console.error('Error saving tasks to AsyncStorage:', error),
    );
};

export const {addTodo, toggleTodo, searchTodo, deleteTodo} = todosSlice.actions;

export default todosSlice.reducer;
