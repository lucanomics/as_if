import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
export function SectionHeader({ title }: { title: string }) { return <View style={styles.wrap}><Text style={styles.title}>{title}</Text></View>; }
const styles = StyleSheet.create({ wrap: { marginTop: spacing.lg, marginBottom: spacing.sm }, title: { color: colors.textPrimary, fontSize: 18, fontWeight: '700' } });
