import { StyleSheet, Text, View } from 'react-native';
import { Scenario } from '../data/scenarios';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { Chip } from './Chip';
export function ScenarioCard({ scenario }: { scenario: Scenario }) { return <View style={styles.card}><Text style={styles.title}>{scenario.title}</Text><View style={styles.row}><Chip label={scenario.category} /><Chip label={scenario.risk} tone='warn' /><Chip label={scenario.difficulty} tone='safe' /></View><Text style={styles.copy}>{scenario.summary}</Text></View>; }
const styles = StyleSheet.create({ card: { backgroundColor: colors.card, borderRadius: 12, padding: spacing.md, borderWidth: 1, borderColor: colors.border }, title: { color: colors.textPrimary, fontWeight: '700', marginBottom: spacing.sm }, row: { flexDirection: 'row', flexWrap: 'wrap' }, copy: { color: colors.textSecondary, marginTop: spacing.sm, lineHeight: 20 } });
