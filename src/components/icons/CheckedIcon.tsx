import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const CheckedIcon = (props: SvgProps) => {
  const {width, height} = props;

  return (
    <Svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        fill="white" // Set the color for the tick
        d="m10 15.172 9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414 4.95 4.95Z"
      />
    </Svg>
  );
};
export default CheckedIcon;
