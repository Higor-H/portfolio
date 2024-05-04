import { div } from "three/examples/jsm/nodes/Nodes.js";

import { Routes, Route } from "react-router-dom";

import Portfolio from "./pages/Portfolio";


function App() {
 return (
  
  <Routes>
    <Route index element={<Portfolio/>} />

    <Route path="*" element={<Portfolio/>} />
  </Routes>



 );
}

export default App
