import React from 'react';
import {View} from 'react-native';
import StyledButton from '../components/Unknown/StyledButton';
import Layout from '../components/Unknown/Layout';
import {RootStackParams} from '../navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import TodoList from '../components/Todo';

interface Props {
  navigation: StackNavigationProp<RootStackParams>;
}

const Home: React.FC<Props> = ({navigation}) => {
  const handleAddTask = () => {
    navigation.navigate('CreateTask');
  };

  return (
    <Layout>
      <View className="flex-1 justify-between">
        <TodoList />
        <StyledButton onPress={handleAddTask} title="Add New Task" />
      </View>
    </Layout>
  );
};

export default Home;
