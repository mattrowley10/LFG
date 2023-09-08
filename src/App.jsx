// import { useState } from 'react'
import "./App.css";
import StartMenu from "./menus/StartMenu.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main className="app">
      <StartMenu start="Start Game" startImg="images/startTown.png" />
    </main>
  );
}

export default App;
