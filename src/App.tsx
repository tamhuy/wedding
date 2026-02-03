import Header from './components/Header'
import Our_story from './sections/Our_story'
import { Banner } from './sections/Banner'
import { Cards } from './sections/Cards'
import RSVP from './sections/RSVP'
import Footer from './components/Footer'
import Map from './components/Map'

import type { EmblaOptionsType } from 'embla-carousel'
import WaveDivider from './components/WaveDivider'
import FAQ from './sections/FAQ'
import Program from './sections/Program'
import ImageCarousel from './components/ImageCarousel'

function App() {
  const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className="bg-[url('src/assets/waves.png')] bg-size-[125%_auto] bg-repeat min-h-screen relative">
      {/* Overlay with primary color at 70% opacity */}
      {/* <div className="absolute inset-0 bg-primary opacity-80 pointer-events-none" /> */}
      
      <div className="relative z-10">
        <Header />
        <Banner />
        
        {/* Cards section with primary background at opacity */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary opacity-70" />
          <div className="relative max-w-7xl mx-auto p-8">
            <Cards />
          </div>
        </div>
        <WaveDivider inverted={true} />
        
        {/* Our story section with secondary background at opacity */}
        <div className="relative">
          <div className="absolute inset-0 bg-secondary opacity-70" />
          <div className="relative max-w-7xl mx-auto p-8">
            <Our_story />
          </div>
        </div>
        <WaveDivider inverted={false} />
        
        {/* RSVP section with primary background at opacity */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary opacity-70" />
          <div className="relative max-w-7xl h-80 mx-auto p-8">
            <RSVP />
          </div>
        </div>
        <WaveDivider inverted={true} />
        

        {/* Map section with secondary background at opacity */}
        <div className="relative">
          <div className="absolute inset-0 bg-secondary opacity-70" />
          <div className="relative max-w-7xl mx-auto p-8">
            <Map />
          </div>
        </div>
        <WaveDivider inverted={false} />

         {/* Map section with secondary background at opacity */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary opacity-70" />
          <div className="relative max-w-7xl mx-auto p-8">
            <FAQ />
          </div>
        </div>
        <WaveDivider inverted={true} />


         {/* Map section with secondary background at opacity */}
        <div className="relative">
          <div className="absolute inset-0 bg-secondary opacity-70" />
          <div className="relative max-w-7xl mx-auto p-8">
            <Program />
          </div>
        </div>

         {/* Map section with secondary background at opacity */}
        <div className="relative">
          <div className="absolute inset-0 bg-secondary opacity-70" />
          <div className="relative max-w-7xl mx-auto p-8">
            
        <ImageCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
