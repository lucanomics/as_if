import { StyleSheet, Text, View } from 'react-native';
import { colors, radii, spacing, type } from '../theme';
export function PhraseCard({ title, body, detail, tone='default' }: { title: string; body: string; detail?: string; tone?: 'default'|'danger'|'safe' }) {
  const bg = tone==='danger'?colors.accentRedSoft:colors.card; const accent=tone==='safe'?colors.safeGreen:tone==='danger'?colors.accentRed:colors.steelBlue;
  return <View style={[styles.card,{backgroundColor:bg,borderLeftColor:accent}]}><Text style={styles.title}>{title}</Text><Text style={styles.body}>{body}</Text>{detail?<Text style={styles.detail}>{detail}</Text>:null}</View>;
}
const styles = StyleSheet.create({ card: { borderRadius: radii.lg, padding: spacing.lg, borderLeftWidth: 3, marginBottom: spacing.sm }, title: { ...type.caption, color: colors.textSecondary }, body: { ...type.body, marginTop: spacing.xs }, detail: { ...type.bodySmall, color: colors.textSecondary, marginTop: spacing.sm } });
