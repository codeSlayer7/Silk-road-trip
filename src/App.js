import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ToursPage from "./pages/ToursPage";
import './utils/i18n';
import '../src/styles/styles.scss'
import RegionPage from "./pages/RegionPage";
import { useState } from "react";
import Profile from "./pages/ProfilePage";
import MapPage from "./pages/MapPage";
import AlbumPage from "./pages/AlbumPage";


function App() {

  const [bg, setBg]=useState(null);

  const updateData = (value) => {
    setBg( value )
  }
    

  return (
    <div  style={!bg?{backgroundColor:"white"} :{backgroundImage:`url(${bg?.bg})`,}}>
      
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/toursPage' element={<ToursPage />} />
        <Route path="/:region" element={<RegionPage updateData={updateData}/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/map" element={<MapPage/>}/>
        
        <Route path="/albumPage" element={<AlbumPage/>}/>
      </Routes>

      <Footer />
    
    </div>
  );
}

export default App;
