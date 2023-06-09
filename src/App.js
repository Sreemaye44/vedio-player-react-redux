import React from 'react';
import Home from './pages/Home';
import Video from './pages/Video';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/videos/:videoId" element={<Video></Video>}></Route>
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
