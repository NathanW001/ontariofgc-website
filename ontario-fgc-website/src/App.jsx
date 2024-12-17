import './App.css'
import Header from './components/Header.jsx'
import Welcome from './components/Welcome.jsx'
import About from './components/About.jsx'
import Organizations from './components/Organizations.jsx'
import Events from './components/Events.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <About/>
      <Organizations/>
      <Events/>
      <Contact/>
    </>
  )
}

export default App
