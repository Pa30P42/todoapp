import React from 'react';
import {Text, View} from 'react-native';
import {H1} from '../components/Unknown/DesignSystem';
import StyledButton from '../components/Unknown/StyledButton';
import Task from '../components/Unknown/Task';
import StyledTextInput from '../components/Unknown/StyledTextInput';

const Home = () => {
  return (
    <View className="flex-1 bg-lightGray justify-center items-center">
      <H1>Hello from main </H1>
      <Text
        style={{
          fontFamily: 'Inter Regular SemiBold',
          fontSize: 40,
        }}>
        Font check
      </Text>
      <Text
        style={{
          fontSize: 40,
        }}>
        Font check
      </Text>
      <Task time="Enter time" title="Any text" />
      <StyledButton onPress={() => {}} title="Press" />
      <View className="bg-black p-4 w-full">
        <StyledTextInput label="Label" />
      </View>
    </View>
  );
};

export default Home;
