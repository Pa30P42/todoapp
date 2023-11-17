import React from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import {BodySmallSB} from './DesignSystem';

interface Props {
  placeholder: string;
  label: string;
  value: string;
  onTextChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

const StyledTextInput: React.FC<Props> = ({
  placeholder = 'Task Title',
  label,
  value,
  onTextChange,
}) => {
  return (
    <View>
      <BodySmallSB className="mb-2">{label}</BodySmallSB>
      <TextInput
        placeholder={placeholder}
        className="px-4 py-5 rounded-md bg-primaryWhite"
        value={value}
        onChange={onTextChange}
      />
    </View>
  );
};

export default StyledTextInput;
