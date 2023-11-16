import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const CalendarIcon = (props: SvgProps) => {
  const {width, height, color} = props;

  return (
    <Svg width={width || 20} height={height || 20} fill="none" {...props}>
      <Path
        stroke={color || '#4A3780'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.667}
        d="M15.833 3.333H4.167C3.247 3.333 2.5 4.08 2.5 5v11.667c0 .92.746 1.666 1.667 1.666h11.666c.92 0 1.667-.746 1.667-1.666V5c0-.92-.746-1.667-1.667-1.667ZM13.333 1.667V5M6.667 1.667V5M2.5 8.333h15"
      />
    </Svg>
  );
};
export default CalendarIcon;
