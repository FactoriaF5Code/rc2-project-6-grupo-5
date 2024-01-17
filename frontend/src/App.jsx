import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { GalleryHotels } from "./components/GalleryHotels/GalleryHotels";
import { Modal } from "./components/Modal/Modal";

function App() {
  return (
    <>
      <Modal />
      
      <Header />

      <GalleryHotels />

      <Footer />
    </>
  );
}

export default App;
