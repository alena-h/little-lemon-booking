import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import MainPage from './Components/MainPage';
import BookingPage from './Components/BookingPage';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
