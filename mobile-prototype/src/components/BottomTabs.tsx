import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, spacing, type } from '../theme';
export type TabKey = 'home' | 'drill' | 'phrases' | 'practice';
const tabs: { key: TabKey; label: string }[] = [{ key: 'home', label: 'HOME' }, { key: 'drill', label: 'DRILL' }, { key: 'phrases', label: 'PHRASES' }, { key: 'practice', label: 'PRACTICE' }];
export function BottomTabs({ current, onChange }: { current: TabKey; onChange: (tab: TabKey) => void }) {
  return <View style={styles.bar}>{tabs.map((t) => <Pressable key={t.key} onPress={() => onChange(t.key)} style={styles.tab}><View style={[styles.indicator, current === t.key && styles.activeIndicator]} /><Text style={[styles.text, current === t.key && styles.active]}>{t.label}</Text></Pressable>)}</View>;
}
const styles = StyleSheet.create({ bar: { flexDirection: 'row', backgroundColor: colors.surface, borderTopWidth: 1, borderTopColor: colors.borderSubtle }, tab: { flex: 1, minHeight: 58, alignItems: 'center' }, indicator: { height: 2, alignSelf: 'stretch' }, activeIndicator: { backgroundColor: colors.textPrimary }, text: { ...type.caption, marginTop: spacing.md, color: colors.textMuted }, active: { color: colors.textPrimary } });
