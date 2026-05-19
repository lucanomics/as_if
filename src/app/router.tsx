import { createBrowserRouter } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell'
import { AboutPage } from '../pages/AboutPage'
import { HomePage } from '../pages/HomePage'
import { MyPracticePage } from '../pages/MyPracticePage'
import { PhraseBankPage } from '../pages/PhraseBankPage'
import { ScenarioDetailPage } from '../pages/ScenarioDetailPage'
import { ScenarioLibraryPage } from '../pages/ScenarioLibraryPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'scenarios', element: <ScenarioLibraryPage /> },
      { path: 'scenarios/:scenarioId', element: <ScenarioDetailPage /> },
      { path: 'phrases', element: <PhraseBankPage /> },
      { path: 'practice', element: <MyPracticePage /> },
      { path: 'about', element: <AboutPage /> },
    ],
  },
])
