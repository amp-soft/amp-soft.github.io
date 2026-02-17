import './App.css'
import { ErrorBoundary } from '@/shared/components'
import { AppProviders } from './AppProviders'
import { AppRouter } from './AppRouter'

function App() {
  return (
    <ErrorBoundary>
      <AppProviders>
        <AppRouter />
      </AppProviders>
    </ErrorBoundary>
  )
}

export default App
