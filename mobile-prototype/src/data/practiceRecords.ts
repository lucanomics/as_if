export type PracticeRecord = {
  id: string;
  scenarioTitle: string;
  date: string;
  weaknessTags: string[];
  audioPracticed: boolean;
};

export const practiceRecords: PracticeRecord[] = [
  {
    id: 'p1',
    scenarioTitle: 'Secondary Inspection at Airport',
    date: '2026-05-17',
    weaknessTags: ['Too long answers', 'Missing dates'],
    audioPracticed: false
  },
  {
    id: 'p2',
    scenarioTitle: 'Clinic Intake Desk',
    date: '2026-05-18',
    weaknessTags: ['Tone too defensive'],
    audioPracticed: true
  }
];
