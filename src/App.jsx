import Header from "./components/Header.jsx";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-200 text-gray-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Header />
      <main className="flex-1 p-4 dark:text-white"></main>
    </div>
  );
}

export default App;
