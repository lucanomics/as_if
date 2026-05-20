import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing, type } from '../theme';
export function SectionHeader({ title }: { title: string }) { return <View style={styles.wrap}><Text style={styles.title}>{title}</Text></View>; }
const styles = StyleSheet.create({ wrap: { marginTop: spacing.lg, marginBottom: spacing.sm }, title: { ...type.caption, color: colors.textSecondary, letterSpacing: 1.2 } });
