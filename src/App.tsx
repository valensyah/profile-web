import TrackRecordExample from './components/TrackRecordExample'
import './App.css'
import Navbar from './components/layout/Navbar'
import Introduction from './components/Introduction'
import Portfolio from './components/Portfolio'
import { AboutMe } from './components/AboutMe'
import Footer from './components/layout/Footer'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="App relative">
      <Toaster position="bottom-right" reverseOrder={false} />
      <Navbar />
      <Introduction />
      <AboutMe />
      <Portfolio />
      <TrackRecordExample />
      <Footer />
    </div>
  )
}

export default App
