import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Scenario } from '../data/scenarios';
import { colors, radii, spacing, type } from '../theme';
import { Chip } from './Chip';
export function ScenarioCard({ scenario }: { scenario: Scenario }) { return <Pressable style={styles.card}><Text style={styles.title}>{scenario.title}</Text><View style={styles.row}><Chip label={scenario.category}/><Chip label={scenario.risk} tone='warn' /><Chip label={scenario.difficulty} tone='safe' /></View><Text style={styles.copy}>{scenario.summary}</Text></Pressable>; }
const styles = StyleSheet.create({ card: { backgroundColor: colors.elevatedCard, borderRadius: radii.xl, padding: spacing.lg, borderWidth: 1, borderColor: colors.border }, title: { ...type.h2 }, row: { flexDirection: 'row', flexWrap: 'wrap', marginTop: spacing.sm }, copy: { ...type.bodySmall, color: colors.textSecondary, marginTop: spacing.sm } });
