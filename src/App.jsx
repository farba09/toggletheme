import { useState, useEffect } from "react";
import Toggle from "./Toggle.jsx";

function App() {
  // État du thème avec vérification côté client
  const [darkMode, setDarkMode] = useState(false);

  // Initialisation après rendu côté client
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    setDarkMode(savedTheme ? savedTheme === "dark" : systemPrefersDark);
  }, []);

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
    <div className="flex min-h-screen flex-col bg-gray-100 text-neutral-900 transition-colors duration-500 dark:bg-neutral-950 dark:text-neutral-100">
      <header className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold dark:text-green-300">Hello React!</h1>
        <Toggle toggleTheme={handleToggle} checked={darkMode} />
      </header>

      <main className="flex-1 p-4 dark:text-green-300">
        <p>
          Ici ton contenu... teste le switch en haut à droite pour changer de
          thème 🌙☀️
        </p>
      </main>
    </div>
  );
}

export default App;
