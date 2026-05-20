import { StyleSheet, Text, View } from 'react-native';
import { colors, radii, spacing, type } from '../theme';
export function ToneShiftCard({ from, to }: { from: string; to: string }) { return <View style={styles.card}><Text style={styles.label}>MEANING</Text><Text style={styles.row}>Casual: {from}</Text><Text style={styles.row}>Polite (recommended): {to}</Text><Text style={styles.row}>Official: {to}</Text></View>; }
const styles=StyleSheet.create({card:{backgroundColor:colors.card,borderRadius:radii.lg,padding:spacing.lg,marginBottom:spacing.sm},label:{...type.caption,color:colors.textSecondary},row:{...type.bodySmall,color:colors.textPrimary,marginTop:spacing.xs}})
