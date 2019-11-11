import React, {useState} from 'react';
import { Button } from "@material-ui/core";
import Sidebar from "./components/Sidebar";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="App">
      <Button onClick={() => setOpen(!open)} onClose={() => setOpen(false)}>Open</Button>
      <Sidebar open={open} onClose={() => setOpen(false)}/>
    </div>
  );
}

export default App;
