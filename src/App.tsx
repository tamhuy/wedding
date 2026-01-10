import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Card from './components/Card'
import Our_story from './sections/Our_story'
import { Banner } from './sections/Banner'
import { Cards } from './sections/Cards'
import { Texts } from './sections/Texts'
import RSVP from './sections/RSVP'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Header />
      <Banner />
      <div className="max-w-7xl mx-auto p-8">
        <Texts />
        <Cards />

        <Our_story />
        <RSVP />

      </div>
      <Footer />
      
    </div>
  )
}

export default App
