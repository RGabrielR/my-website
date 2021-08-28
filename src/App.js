import './App.css';
import './App.scss';
import "animate.css";
import Main from './components/main';
import Highlights from './components/Highlights';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
if (window.matchMedia("(max-width: 768px)").matches) {
    return <div className="flex flex-row justify-center items-center"> <h1 className="my-12 text-6xl text-white"> this page can't be seen on mobile for now... </h1> </div>

}
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
