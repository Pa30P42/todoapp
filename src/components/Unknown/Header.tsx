import React from 'react';
import {View} from 'react-native';
import {BodySB} from './DesignSystem';
import BackIcon from '../icons/BackIcon';

interface Props {
  title?: string;
  headerRight?: React.ReactNode;
  hederLeft?: React.ReactNode;
}

const Header: React.FC<Props> = ({title, headerRight}) => {
  return (
    <View className="flex-row px-4 pb-6 pt-12 bg-violet items-center justify-between">
      <View className="bg-lightGray h-[48] w-[48] rounded-full justify-center items-center">
        <BackIcon />
      </View>
      <BodySB color="white">{title}</BodySB>
      <View className="min-w-[48]">{headerRight && headerRight}</View>
    </View>
  );
};

export default Header;
