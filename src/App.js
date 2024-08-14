import './App.css';
import Header from './components/Header';
import AboutMessage from './components/AboutMessage';
import Organizers from './components/Organizers';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <body>
        <div className='landing-splash'>
          <div className="title-text"> Welcome to the <span className="color-highlight-2">Ontario FGC</span> </div>

          <AboutMessage/>
        </div>
        <div className='organizer-section'>
          <Organizers/>
        </div>
      </body>
    </div>
  );
}

export default App;
