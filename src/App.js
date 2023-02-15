import './App.css';
import Header from './components/Header';
import Front from './components/Frontpage';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
     <Header/>
     <Front/>
     <Portfolio/>
     <About/>
     <Contact/>
    </div>
  );
}

export default App;
