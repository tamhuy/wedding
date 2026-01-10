import Header from './components/Header'
import Our_story from './sections/Our_story'
import { Banner } from './sections/Banner'
import { Cards } from './sections/Cards'
import { Texts } from './sections/Texts'
import RSVP from './sections/RSVP'
import Footer from './components/Footer'

function App() {

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
