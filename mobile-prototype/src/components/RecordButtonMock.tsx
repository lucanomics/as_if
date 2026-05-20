import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, radii, spacing, type } from '../theme';
export function RecordButtonMock(){return <Pressable style={styles.button}><Text style={styles.main}>Hold to record</Text><Text style={styles.sub}>Voice recording will be wired after the prototype flow is validated.</Text></Pressable>}
const styles=StyleSheet.create({button:{backgroundColor:colors.surface,borderWidth:1,borderColor:colors.border,borderRadius:radii.lg,padding:spacing.lg,marginTop:spacing.md},main:{...type.body,color:colors.textPrimary,fontWeight:'600'},sub:{...type.caption,color:colors.textMuted,marginTop:spacing.xs}})
