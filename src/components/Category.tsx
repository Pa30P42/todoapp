import {TouchableOpacity} from 'react-native';
import {RootState} from '../store';
import {useAppSelector} from '../hooks/reduxHooks';
import {TodoCategory} from '../types/todo';
import {EventIcon, GoalIcon, TaskIcon} from './icons';

interface ICategory {
  type: TodoCategory;
  onPress: (category: TodoCategory) => void;
}

const Category: React.FC<ICategory> = ({type, onPress}) => {
  const selectedCategories = useAppSelector(
    (state: RootState) => state.todo.selectedCategories,
  );
  const icons = {
    goal: <GoalIcon />,
    task: <TaskIcon />,
    event: <EventIcon />,
  };
  const handlePress = () => {
    onPress(type);
  };

  const categoryIcon = icons[type];

  const isSelected = selectedCategories.find(category => category === type);

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`rounded-full border-2 border-primaryWhite mr-4 ${
        isSelected && 'border-violet'
      }`}>
      {categoryIcon}
    </TouchableOpacity>
  );
};

export default Category;
