import "./App.css";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import "./App.css";
import MySkills from "./components/MySkills";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className='bg-white'>
      <Navbar />
      <AboutMe />
      <MySkills />
      <Portfolio />
    </div>
  );
}

export default App;
