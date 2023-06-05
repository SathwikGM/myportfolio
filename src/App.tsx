import Navbar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';

import './App.css';


function App() {
  return (
    <div className='App' >
      <div className='content'>
        <Navbar />
        <Hero/>
        <Skills />
        <Projects/>
      </div>
        <Footer />
    </div>
  )
}

export default App
