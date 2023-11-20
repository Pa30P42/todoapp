import {FormValues} from '../types/form';
import {useAppDispatch} from './reduxHooks';
import {Todo} from '../types';
import {addTodo} from '../store/todoSlice';
import {useNavigation} from '@react-navigation/native';
import {TodoCategory} from '../types/todo';

const useForms = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const handleCreateTodo = ({title, category, time}: FormValues) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      category,
      time,
      completed: false,
    };
    dispatch(addTodo(newTodo));
    navigation.navigate('Home');
  };

  const handleCategoryPress = (
    category: TodoCategory,
    setFieldValue: (
      field: string,
      category: TodoCategory,
      shouldValidate: boolean,
    ) => void,
  ) => {
    setFieldValue('category', category, false);
  };

  const handlePickDatetime = (
    field: keyof FormValues,
    datetime: string,
    setFieldValue: (
      field: string,
      date: string,
      shouldValidate: boolean,
    ) => void,
  ) => {
    setFieldValue(field, datetime, false);
  };
  return {
    handleCreateTodo,
    handleCategoryPress,
    handlePickDatetime,
  };
};

export default useForms;
