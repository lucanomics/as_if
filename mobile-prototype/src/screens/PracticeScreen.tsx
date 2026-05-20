import { StyleSheet, Text, View } from 'react-native';
import { PracticeCard } from '../components/PracticeCard';
import { practiceRecords } from '../data/practiceRecords';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export function PracticeScreen() {
  return <View>{practiceRecords.length === 0 ? <View style={styles.empty}><Text style={styles.emptyTitle}>No practice records yet</Text><Text style={styles.emptyText}>Complete a drill and save to review your progress.</Text></View> : practiceRecords.map((r) => <PracticeCard key={r.id} record={r} />)}</View>;
}
const styles = StyleSheet.create({ empty: { backgroundColor: colors.card, padding: spacing.lg, borderRadius: 12 }, emptyTitle: { color: colors.textPrimary, fontWeight: '700', marginBottom: spacing.xs }, emptyText: { color: colors.textSecondary } });
