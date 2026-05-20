import { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';
import { BottomTabs, TabKey } from './BottomTabs';

export function AppShell({ children, currentTab, onTabChange }: PropsWithChildren<{ currentTab: TabKey; onTabChange: (key: TabKey) => void }>) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>{children}</ScrollView>
      <View><BottomTabs current={currentTab} onChange={onTabChange} /></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ safe: { flex: 1, backgroundColor: colors.background }, scroll: { flex: 1 }, content: { padding: 16, paddingBottom: 40 } });
