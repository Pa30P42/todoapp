import {TouchableOpacity} from 'react-native';
import {TodoCategory} from '../types/todo';
import {EventIcon, GoalIcon, TaskIcon} from './icons';

interface ICategory {
  type: TodoCategory;
  onPress: (category: TodoCategory) => void;
  selectedCategories: TodoCategory[];
}

const Category: React.FC<ICategory> = ({type, onPress, selectedCategories}) => {
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
