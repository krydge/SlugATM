
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NoPage from './Pages/NoPage.js'
import ATM from './Pages/ATM.js'
import Bank from "./Pages/Bank";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<ATM />} />
          <Route path="SlugBank" element={<Bank />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
