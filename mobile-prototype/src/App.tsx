import { StatusBar } from 'expo-status-bar';
import { AppShell } from './components/AppShell';
import { TabKey } from './components/BottomTabs';
import { useState } from 'react';
import { HomeScreen } from './screens/HomeScreen';
import { DrillScreen } from './screens/DrillScreen';
import { PhrasesScreen } from './screens/PhrasesScreen';
import { PracticeScreen } from './screens/PracticeScreen';

export default function App() {
  const [tab, setTab] = useState<TabKey>('home');
  return (
    <>
      <StatusBar style='light' />
      <AppShell currentTab={tab} onTabChange={setTab}>
        {tab === 'home' && <HomeScreen goTo={setTab} />}
        {tab === 'drill' && <DrillScreen />}
        {tab === 'phrases' && <PhrasesScreen />}
        {tab === 'practice' && <PracticeScreen />}
      </AppShell>
    </>
  );
}
