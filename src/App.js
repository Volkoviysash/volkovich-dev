import "./App.css";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import "./App.css";
import Portfolio from "./components/Portfolio";
import ContactFooter from "./components/ContactFooter";
import SimpleProjects from "./components/SimpleProjects";
import MySkills from "./components/MySkills";
import Certificates from "./components/Certificates";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className='bg-white dark:bg-blue-gray-900 dark:text-gray-200 '>
      <Navbar handleThemeToggle={handleThemeToggle} />
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
