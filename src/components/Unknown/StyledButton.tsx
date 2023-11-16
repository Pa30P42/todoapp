import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {BodyB} from './DesignSystem';

interface Props {
  title: string;
  onPress: () => void;
}

const StyledButton: React.FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity
      className="items-center border-4 border-violet rounded-full bg-violet w-full py-3"
      onPress={onPress}>
      <View>
        <BodyB color="white" lineHeight={24}>
          {title}
        </BodyB>
      </View>
    </TouchableOpacity>
  );
};

export default StyledButton;
