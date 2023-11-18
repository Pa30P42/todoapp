import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const CloseIcon = (props: SvgProps) => {
  const {width, height, color} = props;

  return (
    <Svg width={width || 24} height={height || 24} fill="none" {...props}>
      <Path
        stroke={color || '#14142B'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m6 6 12.774 12.774M6 18.774 18.774 6"
      />
    </Svg>
  );
};
export default CloseIcon;
