import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import Props from "./components/Props";
import RenderArray from "./components/RenderArray";
import FetchData from "./components/FetchData";

function App() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Props name="faiz" isStudent={true} age={20} /> */}
      {/* <RenderArray/> */}
      <FetchData/>
    </div>
  );
}

export default App;
