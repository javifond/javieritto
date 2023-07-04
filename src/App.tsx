import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main">
        <About />
        <Experience />
      </main>
    </div>
  );
}

export default App;
