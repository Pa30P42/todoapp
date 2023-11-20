import React from 'react';
import {TextInput, View} from 'react-native';
import {BodySmallSB} from './DesignSystem';

interface Props {
  placeholder?: string;
  label?: string;
  value: string;
  multiline?: boolean;
  inputClassName?: string;
  error?: string;
  onTextChange: (text: string) => void;
}

const StyledTextInput: React.FC<Props> = ({
  placeholder = 'Task Title',
  label,
  value,
  multiline = false,
  inputClassName = '',
  error = '',
  onTextChange,
  ...props
}) => {
  return (
    <View>
      <BodySmallSB className="mb-2">{label}</BodySmallSB>
      <TextInput
        multiline={multiline}
        placeholder={placeholder}
        className={`px-4 py-5 mb-2 rounded-md bg-primaryWhite ${inputClassName}`}
        value={value}
        onChangeText={onTextChange}
        {...props}
      />
      <BodySmallSB color="red">{error}</BodySmallSB>
    </View>
  );
};

export default StyledTextInput;
