import { StyleSheet, Text, View } from 'react-native';
import { TabKey } from '../components/BottomTabs';
import { ScenarioCard } from '../components/ScenarioCard';
import { ActionCard } from '../components/ActionCard';
import { SectionHeader } from '../components/SectionHeader';
import { DisclaimerNote } from '../components/DisclaimerNote';
import { scenarios } from '../data/scenarios';
import { colors, spacing, type } from '../theme';

export function HomeScreen({ goTo }: { goTo: (tab: TabKey) => void }) {
  return <View><Text style={styles.brand}>AS IF</Text><Text style={styles.kicker}>HIGH-STAKES ENGLISH PRACTICE</Text><Text style={styles.hero}>Textbook English?{`\n`}As if.</Text><Text style={styles.copy}>Practice for immigration desks, clinics, police stops, counseling rooms, and admin offices.</Text><SectionHeader title="TODAY'S DRILL" /><ScenarioCard scenario={scenarios[0]} /><SectionHeader title='QUICK ACTIONS' /><ActionCard label='Start Pressure Drill' onPress={() => goTo('drill')} /><ActionCard label='Browse Safe Phrases' onPress={() => goTo('phrases')} /><ActionCard label='Review Practice' onPress={() => goTo('practice')} /><DisclaimerNote text='Language practice only. No legal, medical, immigration, or mental health advice.' /></View>;
}
const styles = StyleSheet.create({ brand: { ...type.brand }, kicker: { ...type.caption, color: colors.steelBlue, marginTop: spacing.xs }, hero: { ...type.display, marginTop: spacing.xl }, copy: { ...type.body, color: colors.textSecondary, marginTop: spacing.md } });
