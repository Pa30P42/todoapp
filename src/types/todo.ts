export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  category: TodoCategory;
  time: string;
};

export type TodoCategory = 'goal' | 'task' | 'event';
