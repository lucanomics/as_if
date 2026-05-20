import { TextStyle } from 'react-native';
import { colors } from './colors';

const base: TextStyle = { color: colors.textPrimary, fontFamily: 'System' };

export const type = {
  display: { ...base, fontSize: 42, lineHeight: 46, fontWeight: '700', letterSpacing: -0.8 } as TextStyle,
  brand: { ...base, fontSize: 18, lineHeight: 22, fontWeight: '700', letterSpacing: 2.2 } as TextStyle,
  h1: { ...base, fontSize: 28, lineHeight: 33, fontWeight: '700', letterSpacing: -0.3 } as TextStyle,
  h2: { ...base, fontSize: 22, lineHeight: 28, fontWeight: '600' } as TextStyle,
  pressure: { ...base, fontSize: 24, lineHeight: 30, fontWeight: '600' } as TextStyle,
  body: { ...base, fontSize: 16, lineHeight: 23, fontWeight: '400' } as TextStyle,
  bodySmall: { ...base, fontSize: 14, lineHeight: 20, fontWeight: '400' } as TextStyle,
  caption: { ...base, fontSize: 12, lineHeight: 16, fontWeight: '500', letterSpacing: 0.5 } as TextStyle,
  mono: { ...base, fontSize: 12, lineHeight: 16, fontFamily: 'Courier' } as TextStyle
};
