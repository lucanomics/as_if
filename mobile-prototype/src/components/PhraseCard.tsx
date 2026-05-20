import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
export function PhraseCard({ title, body, tone='default' }: { title: string; body: string; tone?: 'default'|'danger'|'safe' }) {
  const accent = tone === 'danger' ? colors.accentRed : tone === 'safe' ? colors.safeGreen : colors.steelBlue;
  return <View style={[styles.card, { borderLeftColor: accent }]}><Text style={styles.title}>{title}</Text><Text style={styles.body}>{body}</Text></View>;
}
const styles = StyleSheet.create({ card: { backgroundColor: colors.card, borderRadius: 12, padding: spacing.md, borderLeftWidth: 4, marginBottom: spacing.sm }, title: { color: colors.textPrimary, fontWeight: '700', marginBottom: spacing.xs }, body: { color: colors.textSecondary, lineHeight: 20 } });
