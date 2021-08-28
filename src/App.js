import './App.css';
import './App.scss';
import "animate.css";
import Main from './components/main';
import Highlights from './components/Highlights';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {

  return (
     <div className="page-container">
      <Main/>
      <Highlights/>
      <Portfolio/>
      <Contact/>
     
    </div>
  );
}

export default App;
