import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import ExperienceSection from './components/ExperienceSection'
import EntryDetailPage from './pages/EntryDetailPage'
import { PROFESSIONAL_EXPERIENCE, PROJECTS } from './data/entries'

function Home() {
  return (
    <div className="mx-auto w-full max-w-[990px]">
      <HeroSection />
      <ExperienceSection />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-paper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/experience/:slug"
            element={
              <EntryDetailPage
                entries={PROFESSIONAL_EXPERIENCE}
                backTo="/"
                backLabel="Back"
              />
            }
          />
          <Route
            path="/projects/:slug"
            element={
              <EntryDetailPage entries={PROJECTS} backTo="/" backLabel="Back" />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
