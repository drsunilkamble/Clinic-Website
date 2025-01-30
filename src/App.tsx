import './App.css'
import NavigationBar from './components/ui/NavigationBar'
import VisionSection from './components/ui/VisionSection'
import HeroSection from './pages/Hero/HeroSection'

function App() {

  return (
    <>
      <div className="w-full bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden">
        <NavigationBar />
        <HeroSection />
        < VisionSection />
      </div>
      </div>
    </>
  )
}

export default App
