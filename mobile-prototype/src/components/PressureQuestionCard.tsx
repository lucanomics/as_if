import { StyleSheet, Text, View } from 'react-native';
import { colors, radii, spacing, type } from '../theme';
export function PressureQuestionCard({ question }: { question: string }) { return <View style={styles.card}><Text style={styles.label}>THEY ASK</Text><Text style={styles.q}>{question}</Text></View>; }
const styles = StyleSheet.create({ card: { backgroundColor: colors.card, borderRadius: radii.xl, borderWidth: 1, borderColor: colors.border, padding: spacing.lg, marginTop: spacing.md }, label: { ...type.caption, color: colors.accentRed }, q: { ...type.pressure, marginTop: spacing.sm } });
