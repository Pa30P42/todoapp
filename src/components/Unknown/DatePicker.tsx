import React, {useState} from 'react';
import {Body, BodySmallSB} from './DesignSystem';
import {Modal, TouchableOpacity, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {CalendarIcon, ClockIcon} from '../icons';
import StyledButton from './StyledButton';
import {DateTimePickerEvent} from '@react-native-community/datetimepicker';

interface Props {
  type: 'date' | 'time';
  containerStyles?: string;
}

const DatePicker: React.FC<Props> = ({type = 'date', containerStyles = ''}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const label = type === 'date' ? 'Date' : 'Time';
  const icon = type === 'date' ? <CalendarIcon /> : <ClockIcon />;
  const [dateValue, setDateValue] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<string>(label);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const handleDateChange = (_: DateTimePickerEvent, date: Date | undefined) => {
    if (!date) return;
    setDateValue(date);
  };

  const handleConfirm = () => {
    setDatePickerVisibility(false);
    const dateObject = new Date(dateValue);
    if (type === 'date') {
      return setSelectedDate(dateObject.toLocaleDateString());
    }

    return setSelectedDate(dateObject.toLocaleTimeString());
  };

  return (
    <View className={`flex-1 ${containerStyles}`}>
      <BodySmallSB className="mb-2">{label}</BodySmallSB>
      <TouchableOpacity
        onPress={showDatePicker}
        className="flex-row justify-between items-center px-4 py-5 rounded-md bg-primaryWhite">
        <Body light={true}>{selectedDate}</Body>
        {icon}
      </TouchableOpacity>

      <Modal visible={isDatePickerVisible} presentationStyle="fullScreen">
        <View className="flex-1 bg-transparent justify-center mx-5">
          <DateTimePicker
            onChange={handleDateChange}
            positiveButtonLabel="confirm"
            value={dateValue}
            display="spinner"
            mode={type}
          />
          <StyledButton onPress={handleConfirm} title="Confirm" />
        </View>
      </Modal>
    </View>
  );
};

export default DatePicker;
