import { useState } from "react";
import BootScreen from "./components/BootScreen";
import Terminal from "./components/Terminal";
import "./styles/terminal.css";

export default function App() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      {!booted && <BootScreen onDone={() => setBooted(true)} />}
      {booted && <Terminal />}
    </>
  );
}
