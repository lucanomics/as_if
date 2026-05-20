import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { PhraseCard } from '../components/PhraseCard';
import { avoidPhrases, safePhrases, toneShifts } from '../data/phrases';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

type Segment = 'safe' | 'avoid' | 'tone';
export function PhrasesScreen() {
  const [segment, setSegment] = useState<Segment>('safe');
  const [query, setQuery] = useState('');
  const safeFiltered = useMemo(() => safePhrases.filter((p) => p.toLowerCase().includes(query.toLowerCase())), [query]);
  return <View><View style={styles.segmentRow}>{(['safe', 'avoid', 'tone'] as Segment[]).map((s) => <Pressable key={s} style={[styles.segment, segment === s && styles.active]} onPress={() => setSegment(s)}><Text style={styles.segText}>{s.toUpperCase()}</Text></Pressable>)}</View><TextInput placeholder='Filter phrases (optional)' placeholderTextColor={colors.textSecondary} value={query} onChangeText={setQuery} style={styles.input} />{segment === 'safe' && safeFiltered.map((item) => <PhraseCard key={item} title='Safe Phrase' body={item} tone='safe' />)}{segment === 'avoid' && avoidPhrases.map((item) => <PhraseCard key={item} title="Don't Say That" body={item} tone='danger' />)}{segment === 'tone' && toneShifts.map((item) => <PhraseCard key={item.from} title='Tone Shift' body={`${item.from} → ${item.to}`} />)}</View>;
}
const styles = StyleSheet.create({ segmentRow: { flexDirection: 'row', marginBottom: spacing.sm }, segment: { backgroundColor: colors.card, paddingVertical: spacing.sm, paddingHorizontal: spacing.md, borderRadius: 10, marginRight: spacing.xs }, active: { borderWidth: 1, borderColor: colors.steelBlue }, segText: { color: colors.textPrimary, fontWeight: '700', fontSize: 12 }, input: { backgroundColor: colors.surface, color: colors.textPrimary, borderRadius: 10, padding: spacing.sm, marginBottom: spacing.md } });
