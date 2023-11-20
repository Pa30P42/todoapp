import {TodoCategory} from './todo';

export interface FormValues {
  title: string;
  category: TodoCategory;
  date: string;
  time: string;
  notes: string;
}
