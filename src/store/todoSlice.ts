import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Todo} from '../types';
import {TodoCategory} from '../types/todo';

const mockTodos: Todo[] = [
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

type TodoSlice = {
  todos: Todo[];
  searchValue: string;
  selectedCategories: TodoCategory[];
};

const initialState: TodoSlice = {
  todos: mockTodos,
  searchValue: '',
  selectedCategories: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(task => task.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      const index = state.todos.findIndex(
        task => task.id === action.payload.id,
      );
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
    updateSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload.toLowerCase();
    },
    toggleCategory: (state, action: PayloadAction<TodoCategory>) => {
      const categoryIndex = state.selectedCategories.findIndex(
        category => category === action.payload,
      );

      if (categoryIndex === -1) {
        state.selectedCategories.push(action.payload);
      } else {
        state.selectedCategories.splice(categoryIndex, 1);
      }
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  updateSearchValue,
  deleteTodo,
  toggleCategory,
} = todosSlice.actions;

export default todosSlice.reducer;
