import './App.css'
import NavigationBar from './Sections/NavigationBar'
import VisionSection from './Sections/VisionSection'
import HeroSection from './Sections/HeroSection'
import ServicesSection from './Sections/ServiceSection'

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
