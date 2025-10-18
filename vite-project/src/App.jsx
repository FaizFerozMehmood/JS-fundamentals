import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Make a counter app with increment/decrement/reset.</p>
      <h2>{count}</h2>
      <button onClick={()=> setCount(prev => prev +1)}>add</button>
      <button onClick={()=> setCount(prev => prev-1)}
        disabled ={count <=0}
        style={{backgroundColor: count<=0 ? "red":"white",cursor: count <=0 ? "not-allowed":"pointer"}
      
      }
        >decrement</button>
      <button onClick={()=> setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
