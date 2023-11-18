import React from 'react';
import {View} from 'react-native';
import CloseIcon from '../icons/CloseIcon';

const CloseButton = () => {
  return (
    <View className="bg-lightGray h-[48] w-[48] rounded-full justify-center items-center">
      <CloseIcon />
    </View>
  );
};

export default CloseButton;
