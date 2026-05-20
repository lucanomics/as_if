export type Scenario = {
  id: string;
  title: string;
  category: string;
  risk: 'High' | 'Medium' | 'Low';
  difficulty: 'Hard' | 'Medium' | 'Easy';
  summary: string;
  pressureQuestion: string;
  betterAnswer: string;
};

export const scenarios: Scenario[] = [
  {
    id: 'immigration-secondary',
    title: 'Secondary Inspection at Airport',
    category: 'Immigration Desk',
    risk: 'High',
    difficulty: 'Hard',
    summary: 'An officer asks detailed follow-up questions and you need to respond clearly without sounding evasive.',
    pressureQuestion: 'Why are you staying longer than your original itinerary?',
    betterAnswer: 'I extended my stay to visit my sister after my conference. I have return tickets for June 4 and hotel bookings here.'
  },
  {
    id: 'clinic-intake',
    title: 'Clinic Intake Desk',
    category: 'Medical Admin',
    risk: 'Medium',
    difficulty: 'Medium',
    summary: 'You need to explain symptoms and insurance details at a busy reception desk.',
    pressureQuestion: 'Can you explain your symptoms and when they started?',
    betterAnswer: 'I have had sharp stomach pain since yesterday evening, and it got worse this morning.'
  },
  {
    id: 'police-stop',
    title: 'Routine Traffic Stop',
    category: 'Police Stop',
    risk: 'High',
    difficulty: 'Hard',
    summary: 'An officer asks concise questions. You should stay calm, factual, and respectful.',
    pressureQuestion: 'Do you know why I pulled you over?',
    betterAnswer: 'I’m not sure, officer. If I made a mistake, I’d like to understand and cooperate.'
  }
];
