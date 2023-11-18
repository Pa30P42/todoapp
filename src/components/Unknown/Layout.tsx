import React from 'react';
import {View} from 'react-native';

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({children}) => {
  return (
    <View className="flex-1">
      <View className="flex-1 bg-lightGray pb-6 px-4">{children}</View>
    </View>
  );
};

export default Layout;
