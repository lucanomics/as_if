import { StyleSheet, Text, View } from 'react-native';
import { PracticeCard } from '../components/PracticeCard';
import { practiceRecords } from '../data/practiceRecords';
import { colors, spacing, type } from '../theme';

export function PracticeScreen() {
  return <View><Text style={styles.header}>PRACTICE</Text><View style={styles.pill}><Text style={styles.pillText}>ON DEVICE</Text></View><Text style={styles.title}>What you've actually said.</Text>{practiceRecords.length===0?<View style={styles.empty}><Text style={styles.emptyTitle}>No saved practice yet.</Text><Text style={styles.emptyText}>Run a drill, save it locally, and review your wording here.</Text></View>:practiceRecords.map((r)=><PracticeCard key={r.id} record={r} />)}</View>;
}
const styles=StyleSheet.create({header:{...type.caption,color:colors.textSecondary},pill:{alignSelf:'flex-start',backgroundColor:colors.steelBlueSoft,paddingHorizontal:spacing.sm,paddingVertical:spacing.xs,borderRadius:9999,marginTop:spacing.sm},pillText:{...type.caption,color:colors.steelBlue},title:{...type.h2,marginTop:spacing.md,marginBottom:spacing.md},empty:{backgroundColor:colors.card,padding:spacing.lg,borderRadius:14},emptyTitle:{...type.body,color:colors.textPrimary,fontWeight:'600'},emptyText:{...type.bodySmall,color:colors.textSecondary,marginTop:spacing.sm}})
