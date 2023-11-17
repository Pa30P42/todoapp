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
  multiline: boolean;
  inputClassName: string;
  onTextChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

const StyledTextInput: React.FC<Props> = ({
  placeholder = 'Task Title',
  label,
  value,
  multiline = false,
  inputClassName = '',
  onTextChange,
}) => {
  return (
    <View>
      <BodySmallSB className="mb-2">{label}</BodySmallSB>
      <TextInput
        multiline={multiline}
        placeholder={placeholder}
        className={`px-4 py-5 rounded-md bg-primaryWhite ${inputClassName}`}
        value={value}
        onChange={onTextChange}
      />
    </View>
  );
};

export default StyledTextInput;
