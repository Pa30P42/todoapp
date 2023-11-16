import React from 'react';
import {Text, View} from 'react-native';
import {H1} from '../components/Unknown/DesignSystem';
import StyledButton from '../components/Unknown/StyledButton';

const Home = () => {
  return (
    <View className="flex-1 justify-center items-center">
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
      <StyledButton onPress={() => {}} title="Press" />
    </View>
  );
};

export default Home;
