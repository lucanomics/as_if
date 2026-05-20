import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
export function ActionCard({ label, onPress }: { label: string; onPress: () => void }) { return <Pressable style={styles.card} onPress={onPress}><Text style={styles.text}>{label}</Text></Pressable>; }
const styles = StyleSheet.create({ card: { backgroundColor: colors.card, borderRadius: 12, padding: spacing.md, borderWidth: 1, borderColor: colors.border, marginBottom: spacing.sm }, text: { color: colors.textPrimary, fontWeight: '600' } });
