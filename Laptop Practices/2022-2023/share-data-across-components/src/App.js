import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Input from "./Inputs";
import Parser from "./Parser";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Input />} />
          <Route path="/parser" element={<Parser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
