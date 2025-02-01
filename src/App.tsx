import './App.css'
import NavigationBar from './Sections/NavigationBar'
import VisionSection from './Sections/VisionSection'
import HeroSection from './Sections/HeroSection'
import ServicesSection from './Sections/ServiceSection'
import ReviewSection from './Sections/ReviewSection'
import FooterSection from './Sections/FooterSection'
import AboutDoctor from './Sections/AboutDoctor'
import SmoothScrollWrapper from './components/ui/SmoothScrollbar'

function App() {

  return (
    <>
      <SmoothScrollWrapper>
        <div className="w-full bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden">
            <NavigationBar />
            <HeroSection />
            <VisionSection />
            <AboutDoctor />
            <ServicesSection />
            <ReviewSection />
            <FooterSection />
          </div>
        </div>
      </SmoothScrollWrapper>
    </>
  )
}

export default App
