import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

export function Chip({ label, tone = 'default' }: { label: string; tone?: 'default' | 'warn' | 'safe' | 'danger' }) {
  const bg = tone === 'warn' ? colors.warningAmber : tone === 'safe' ? colors.safeGreen : tone === 'danger' ? colors.accentRed : colors.steelBlue;
  return <View style={[styles.chip, { backgroundColor: bg }]}><Text style={styles.text}>{label}</Text></View>;
}
const styles = StyleSheet.create({ chip: { paddingHorizontal: spacing.sm, paddingVertical: spacing.xs, borderRadius: 999, marginRight: spacing.xs, marginBottom: spacing.xs }, text: { color: colors.background, fontSize: typography.chip, fontWeight: '700' } });
