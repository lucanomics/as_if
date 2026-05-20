import { StyleSheet, Text, View } from 'react-native';
import { colors, radii, spacing, type } from '../theme';
export function BetterAnswerCard({ answer }: { answer: string }) { return <View style={styles.card}><Text style={styles.title}>A CLEAR MODEL</Text><Text style={styles.sub}>Not a script</Text><Text style={styles.body}>{answer}</Text></View>; }
const styles=StyleSheet.create({card:{backgroundColor:colors.steelBlueSoft,borderRadius:radii.lg,padding:spacing.lg,marginTop:spacing.md},title:{...type.caption,color:colors.steelBlue},sub:{...type.caption,color:colors.textSecondary,marginTop:spacing.xs},body:{...type.bodySmall,color:colors.textPrimary,marginTop:spacing.sm}})
