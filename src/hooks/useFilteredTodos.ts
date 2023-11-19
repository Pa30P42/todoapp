import {useMemo} from 'react';
import {RootState} from '../store';
import {useAppSelector} from './reduxHooks';

const useFilteredTodos = (completed: boolean) => {
  const selectedCategories = useAppSelector(
    (state: RootState) => state.todo.selectedCategories,
  );

  const searchValue = useAppSelector(
    (state: RootState) => state.todo.searchValue,
  );

  const todos = useAppSelector((state: RootState) => state.todo.todos);

  const filteredTodos = useMemo(
    () =>
      todos.filter(
        todo =>
          todo.completed === completed &&
          todo.title.toLowerCase().includes(searchValue) &&
          (selectedCategories.length === 0 ||
            selectedCategories.includes(todo.category)),
      ),
    [todos, searchValue, selectedCategories, completed],
  );

  return filteredTodos;
};

export default useFilteredTodos;
