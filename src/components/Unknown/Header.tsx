import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {BodySB} from './DesignSystem';
import BackIcon from '../icons/BackIcon';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title?: string;
  headerRight?: React.ReactNode;
  headerLeft?: React.ReactNode;
  onHeaderLeftPress?: () => void;
}

const Header: React.FC<Props> = ({
  title,
  headerRight,
  headerLeft,
  onHeaderLeftPress,
}) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View className="flex-row px-4 pb-6 pt-12 bg-violet items-center justify-between">
      <TouchableOpacity onPress={onHeaderLeftPress || goBack}>
        {headerLeft ? (
          headerLeft
        ) : (
          <View className="bg-lightGray h-[48] w-[48] rounded-full justify-center items-center">
            <BackIcon />
          </View>
        )}
      </TouchableOpacity>
      <BodySB color="white">{title}</BodySB>
      <View className="min-w-[48]">{headerRight && headerRight}</View>
    </View>
  );
};

export default Header;
