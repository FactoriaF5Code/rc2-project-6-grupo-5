import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { MyBookings } from "./components/MyBookings/MyBookings";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mis-reservas" element={<MyBookings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
