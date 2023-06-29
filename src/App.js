import "./App.css";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import "./App.css";
import Portfolio from "./components/Portfolio";
import ContactFooter from "./components/ContactFooter";
import SimpleProjects from "./components/SimpleProjects";
import MySkills from "./components/MySkills";
import Certificates from "./components/Certificates";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-blue-gray-900 text-gray-200" : "bg-white "
      }`}
    >
      <Navbar handleThemeToggle={handleThemeToggle} />
      <AboutMe isDarkMode={isDarkMode} />
      <MySkills isDarkMode={isDarkMode} />
      <Portfolio isDarkMode={isDarkMode} />
      <SimpleProjects isDarkMode={isDarkMode} />
      <Certificates isDarkMode={isDarkMode} />
      <ContactFooter isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
