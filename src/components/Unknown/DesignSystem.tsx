import React from 'react';
import {Text, TextStyle} from 'react-native';

const WEIGHTS = {
  normal: {
    fontFamily: 'Inter Regular Regular',
    fontWeight: '400',
  },
  medium: {
    fontFamily: 'Inter Regular Medium',
    fontWeight: '500',
  },
  'semi-bold': {
    fontFamily: 'Inter Regular SemiBold',
    fontWeight: '600',
  },
  bold: {
    fontFamily: 'Inter Regular Bold',
    fontWeight: '700',
  },
};
type WeightKeys = keyof typeof WEIGHTS;

interface Props {
  fontSize?: number;
  lineHeight?: number;
  letterSpacing?: number;
  style?: TextStyle;
  weight?: WeightKeys;
  underline?: boolean;
  children?: string;
}

const BaseText: React.FC<Props> = ({
  fontSize,
  lineHeight,
  letterSpacing,
  style,
  weight = 'normal',
  underline = false,
  ...props
}) => {
  const textDecorationLine = underline ? 'underline' : 'none';

  return (
    <Text
      style={[
        WEIGHTS[weight] as TextStyle,
        {
          textDecorationLine,
          fontSize,
          lineHeight,
          letterSpacing,
          color: '#1E1E1E',
        },
        style,
      ]}
      {...props}
    />
  );
};

const Header = (props: Props) => <BaseText weight="semi-bold" {...props} />;

export const H1 = (props: Props) => (
  <Header fontSize={30} lineHeight={30} {...props} />
);

export const H2 = (props: Props) => (
  <Header fontSize={22} lineHeight={26} {...props} />
);

export const H3 = (props: Props) => (
  <Header fontSize={16} lineHeight={20} {...props} />
);

export const H4 = (props: Props) => (
  <Header fontSize={14} lineHeight={22} {...props} />
);

export const H5 = (props: Props) => (
  <Header fontSize={14} letterSpacing={0.2} {...props} />
);

export const Body = (props: Props) => (
  <BaseText fontSize={16} lineHeight={18} {...props} />
);

export const BodySmall = (props: Props) => (
  <BaseText fontSize={14} lineHeight={16} {...props} />
);

export const BodyU = (props: Props) => <Body underline {...props} />;
export const BodyM = (props: Props) => <Body weight="medium" {...props} />;
export const BodySB = (props: Props) => <Body weight="semi-bold" {...props} />;
export const BodyB = (props: Props) => <Body weight="bold" {...props} />;

export const BodySmallU = (props: Props) => <BodySmall underline {...props} />;
export const BodySmallSB = (props: Props) => (
  <BodySmall weight="semi-bold" {...props} />
);
export const BodySmallSBU = (props: Props) => (
  <BodySmall weight="semi-bold" underline {...props} />
);
