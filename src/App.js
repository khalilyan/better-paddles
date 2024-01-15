import './App.css';
import Scroll from './components/Smooth-scrolling/SmoothScroll';
import About from './sections/About/About';
import Intro from './sections/Intro/Intro';
import Products from './sections/Products/Products';
import Structure from './sections/Structure/Structure';

function App() {
  return (
    <>
      <div className="App">
        <Scroll/>
      <Intro/>
      <About/>
      <Structure/>
      <Products/>
      </div>
    </>
  );
}

export default App;
