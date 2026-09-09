import HeroSection from './components/HeroSection'
import ExperienceSection from './components/ExperienceSection'

function App() {
  return (
    <div className="min-h-screen bg-paper">
      <div className="mx-auto w-full max-w-[990px]">
        <HeroSection />
        <ExperienceSection />
      </div>
    </div>
  )
}

export default App
