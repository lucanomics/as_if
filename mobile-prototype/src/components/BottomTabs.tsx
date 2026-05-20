import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
export type TabKey = 'home'|'drill'|'phrases'|'practice';
const tabs: { key: TabKey; label: string }[] = [{ key: 'home', label: 'Home' },{ key: 'drill', label: 'Drill' },{ key: 'phrases', label: 'Phrases' },{ key: 'practice', label: 'Practice' }];
export function BottomTabs({ current, onChange }: { current: TabKey; onChange: (tab: TabKey) => void }) { return <View style={styles.bar}>{tabs.map((t) => <Pressable key={t.key} onPress={() => onChange(t.key)} style={styles.tab}><Text style={[styles.text, current === t.key && styles.active]}>{t.label}</Text></Pressable>)}</View>; }
const styles = StyleSheet.create({ bar: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: colors.surface, borderTopWidth: 1, borderTopColor: colors.border, paddingVertical: spacing.sm }, tab: { paddingHorizontal: spacing.sm }, text: { color: colors.textSecondary, fontWeight: '600' }, active: { color: colors.textPrimary } });
