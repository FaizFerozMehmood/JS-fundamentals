import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import Pos from "./pages/Pos";
function App() {

  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/pos" element={<Pos/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
