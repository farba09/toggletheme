import { useState, useEffect } from "react";
import Toggle from "./Toggle.jsx";

function Header() {
  // État du thème avec vérification côté client
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Synchronisation avec le DOM et le localStorage
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Inversion simple du thème
  const handleToggle = () => {
    setDarkMode(!darkMode);
    console.log("darkMode actuel:", darkMode);
  };

  return (
    <div>
      <header className="flex items-center justify-between p-4">
        <h1 className="font-sans text-3xl font-semibold italic dark:text-white">
          as salâmu 'alaykum
        </h1>
        <Toggle toggleTheme={handleToggle} checked={darkMode} />
      </header>
    </div>
  );
}

export default Header;
