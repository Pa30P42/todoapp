import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {BodyB} from './DesignSystem';

interface Props {
  title: string;
  onPress: () => void;
}

const StyledButton: React.FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <BodyB>{title}</BodyB>
      </View>
    </TouchableOpacity>
  );
};

export default StyledButton;
