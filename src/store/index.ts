import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import todosReducer from './todoSlice';

const middlewares = getDefaultMiddleware({
  // https://github.com/reduxjs/redux-toolkit/issues/415
  immutableCheck: false,
});

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const rootReducer = combineReducers({
  todos: todosReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
