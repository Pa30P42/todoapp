import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

const BackIcon = (props: SvgProps) => {
  const {width, height, color} = props;

  return (
    <Svg width={width || 24} height={height || 24} fill="none" {...props}>
      <G clipPath="url(#a)">
        <Path
          fill={color || '#4A3780'}
          d="m10.828 12 4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414-4.95 4.95Z"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default BackIcon;
