import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, radii, spacing, type } from '../theme';
export function ActionCard({ label, onPress }: { label: string; onPress: () => void }) { return <Pressable style={styles.card} onPress={onPress}><Text style={styles.text}>{label}</Text></Pressable>; }
const styles = StyleSheet.create({ card: { backgroundColor: colors.card, borderRadius: radii.lg, padding: spacing.lg, borderWidth: 1, borderColor: colors.borderSubtle, marginBottom: spacing.sm }, text: { ...type.body, color: colors.textPrimary } });
