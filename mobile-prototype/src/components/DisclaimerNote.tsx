import { StyleSheet, Text } from 'react-native';
import { colors, spacing, type } from '../theme';
export function DisclaimerNote({ text }: { text: string }) { return <Text style={styles.note}>{text}</Text>; }
const styles = StyleSheet.create({ note: { ...type.caption, color: colors.textMuted, marginTop: spacing.lg } });
