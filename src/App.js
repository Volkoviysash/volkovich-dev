import "./App.css";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import "./App.css";
import Portfolio from "./components/Portfolio";
import ContactFooter from "./components/ContactFooter";
import SimpleProjects from "./components/SimpleProjects";
import MySkills from "./components/MySkills";
import Certificates from "./components/Certificates";

function App() {
  return (
    <div className='bg-white'>
      <Navbar />
      <AboutMe />
      <MySkills />
      <Portfolio />
      <SimpleProjects />
      <Certificates />
      <ContactFooter />
    </div>
  );
}

export default App;
