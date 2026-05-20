import { StyleSheet, Text, View } from 'react-native';
import { ScenarioCard } from '../components/ScenarioCard';
import { ActionCard } from '../components/ActionCard';
import { SectionHeader } from '../components/SectionHeader';
import { scenarios } from '../data/scenarios';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { TabKey } from '../components/BottomTabs';

export function HomeScreen({ goTo }: { goTo: (tab: TabKey) => void }) {
  return <View><Text style={styles.title}>As If</Text><Text style={styles.subtitle}>High-Stakes English Practice</Text><Text style={styles.headline}>Textbook English? As if.</Text><Text style={styles.copy}>Practice for immigration desks, clinics, police stops, counseling rooms, and admin offices.</Text><SectionHeader title='Quick Actions' /><ActionCard label='Start Pressure Drill' onPress={() => goTo('drill')} /><ActionCard label='Browse Safe Phrases' onPress={() => goTo('phrases')} /><ActionCard label='Review Practice' onPress={() => goTo('practice')} /><SectionHeader title="Today's Drill" /><ScenarioCard scenario={scenarios[0]} /><Text style={styles.disclaimer}>Language practice only. No legal, medical, immigration, or mental health advice.</Text></View>;
}
const styles = StyleSheet.create({ title: { color: colors.textPrimary, fontSize: 32, fontWeight: '800' }, subtitle: { color: colors.steelBlue, marginBottom: spacing.md }, headline: { color: colors.textPrimary, fontSize: 22, fontWeight: '700' }, copy: { color: colors.textSecondary, marginTop: spacing.sm, lineHeight: 22 }, disclaimer: { color: colors.textSecondary, fontSize: 12, marginTop: spacing.lg, lineHeight: 18 } });
