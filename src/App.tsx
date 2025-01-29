import './App.css'
import HeroSection from './pages/Hero/HeroSection'

function App() {

  return (
    <>
      <div className="w-full bg-white">
      <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden">
        <div className="container ">
          <HeroSection />
        </div>
      </div>
      </div>
    </>
  )
}

export default App
