import { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabs, TabKey } from './BottomTabs';
import { colors, spacing } from '../theme';

export function AppShell({ children, currentTab, onTabChange }: PropsWithChildren<{ currentTab: TabKey; onTabChange: (key: TabKey) => void }>) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
      <BottomTabs current={currentTab} onChange={onTabChange} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({ safe: { flex: 1, backgroundColor: colors.background }, scroll: { flex: 1 }, content: { padding: spacing.xl, paddingBottom: 110 }, });
