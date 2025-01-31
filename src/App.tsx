import './App.css'
import NavigationBar from './components/ui/NavigationBar'
import VisionSection from './components/ui/VisionSection'
import HeroSection from './components/ui/HeroSection'
import ServicesSection from './components/ui/ServiceSection'

function App() {

  return (
    <>
      <div className="w-full bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden">
        <NavigationBar />
        <HeroSection />
        <VisionSection />
        < ServicesSection />
      </div>
      </div>
    </>
  )
}

export default App
