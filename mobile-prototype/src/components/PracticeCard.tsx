import { Pressable, StyleSheet, Text, View } from 'react-native';
import { PracticeRecord } from '../data/practiceRecords';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { Chip } from './Chip';
export function PracticeCard({ record }: { record: PracticeRecord }) { return <View style={styles.card}><Text style={styles.title}>{record.scenarioTitle}</Text><Text style={styles.date}>{record.date}</Text><View style={styles.row}>{record.weaknessTags.map((w) => <Chip key={w} label={w} tone='danger' />)}</View><Text style={styles.meta}>Audio practiced: {record.audioPracticed ? 'Yes' : 'No'}</Text><Pressable style={styles.button}><Text style={styles.btnText}>Practice again</Text></Pressable></View>; }
const styles = StyleSheet.create({ card: { backgroundColor: colors.card, borderRadius: 12, padding: spacing.md, marginBottom: spacing.sm }, title: { color: colors.textPrimary, fontWeight: '700' }, date: { color: colors.textSecondary, marginVertical: spacing.xs }, row: { flexDirection: 'row', flexWrap: 'wrap' }, meta: { color: colors.textSecondary, marginVertical: spacing.sm }, button: { backgroundColor: colors.surface, paddingVertical: spacing.sm, borderRadius: 10, alignItems: 'center' }, btnText: { color: colors.textPrimary, fontWeight: '600' } });
