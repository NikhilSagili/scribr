import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Badge } from '../components/Badge'
import { AppRoutes } from './routes'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 flex flex-col">
      <Badge />
      <Navbar />
      <main className="flex-1">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
