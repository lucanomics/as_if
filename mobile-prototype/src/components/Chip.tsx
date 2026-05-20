import { StyleSheet, Text, View } from 'react-native';
import { colors, radii, spacing, type } from '../theme';
export function Chip({ label, tone = 'default' }: { label: string; tone?: 'default' | 'warn' | 'safe' | 'danger' }) {
  const bg = tone === 'warn' ? colors.warningAmberSoft : tone === 'safe' ? colors.safeGreenSoft : tone === 'danger' ? colors.accentRedSoft : colors.steelBlueSoft;
  const fg = tone === 'warn' ? colors.warningAmber : tone === 'safe' ? colors.safeGreen : tone === 'danger' ? colors.accentRed : colors.steelBlue;
  return <View style={[styles.chip, { backgroundColor: bg }]}><Text style={[styles.text, { color: fg }]}>{label.toUpperCase()}</Text></View>;
}
const styles = StyleSheet.create({ chip: { paddingHorizontal: spacing.sm, paddingVertical: spacing.xs, borderRadius: radii.pill, marginRight: spacing.sm, marginBottom: spacing.xs }, text: { ...type.caption } });
