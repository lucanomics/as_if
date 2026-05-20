import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Chip } from '../components/Chip';
import { scenarios } from '../data/scenarios';
import { safePhrases } from '../data/phrases';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export function DrillScreen() {
  const scenario = scenarios[0];
  const [answer, setAnswer] = useState('');
  return <View><Text style={styles.title}>{scenario.title}</Text><View style={styles.row}><Chip label={scenario.category} /><Chip label={scenario.risk} tone='warn' /><Chip label={scenario.difficulty} tone='safe' /></View><Text style={styles.label}>Situation</Text><Text style={styles.copy}>{scenario.summary}</Text><Text style={styles.label}>Pressure Question</Text><Text style={styles.copy}>{scenario.pressureQuestion}</Text><TextInput style={styles.input} multiline placeholder='Type your response…' placeholderTextColor={colors.textSecondary} value={answer} onChangeText={setAnswer} /><Pressable style={styles.button}><Text style={styles.btnText}>Mock Record</Text></Pressable><Text style={styles.note}>Voice recording will be wired after the prototype flow is validated.</Text><Text style={styles.label}>Safe Phrases</Text><View style={styles.row}>{safePhrases.slice(0, 3).map((p) => <Chip key={p} label={p} tone='safe' />)}</View><View style={styles.card}><Text style={styles.label}>Better Answer Preview</Text><Text style={styles.copy}>{scenario.betterAnswer}</Text></View><View style={styles.card}><Text style={styles.label}>Self-check (mock)</Text><Text style={styles.copy}>• Was I clear?
• Was my tone calm?
• Did I include concrete facts?</Text></View><Pressable style={styles.save}><Text style={styles.btnText}>Save Practice (mock)</Text></Pressable></View>;
}
const styles = StyleSheet.create({ title: { color: colors.textPrimary, fontSize: 24, fontWeight: '700' }, row: { flexDirection: 'row', flexWrap: 'wrap', marginVertical: spacing.sm }, label: { color: colors.textPrimary, fontWeight: '700', marginTop: spacing.md, marginBottom: spacing.xs }, copy: { color: colors.textSecondary, lineHeight: 21 }, input: { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1, borderRadius: 12, minHeight: 110, marginTop: spacing.sm, color: colors.textPrimary, padding: spacing.sm, textAlignVertical: 'top' }, button: { backgroundColor: colors.surface, marginTop: spacing.sm, padding: spacing.sm, borderRadius: 10, alignItems: 'center' }, note: { color: colors.warningAmber, marginTop: spacing.sm, fontSize: 12 }, card: { backgroundColor: colors.card, borderRadius: 12, padding: spacing.md, marginTop: spacing.sm }, save: { backgroundColor: colors.safeGreen, marginTop: spacing.md, padding: spacing.sm, borderRadius: 10, alignItems: 'center' }, btnText: { color: colors.background, fontWeight: '700' } });
