import './App.css';
import Header from './components/Header';
import AboutMessage from './components/AboutMessage';

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
        
      </body>
    </div>
  );
}

export default App;
