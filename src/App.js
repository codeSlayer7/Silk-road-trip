import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ToursPage from "./pages/ToursPage";
import RegionPage from "./pages/RegionPage";
import { useState } from "react";
import Profile from "./pages/ProfilePage";
import MapPage from "./pages/MapPage";
import AlbumPage from "./pages/AlbomPage";
import './utils/i18n';
import '../src/styles/styles.scss';
import Scheduler from "./pages/Scheduler";
import ArticlesPage from "./pages/ArticlesPage";
import Article from "./components/Article/article";
function App() {

  const [bg, setBg] = useState(null);

  const updateData = (value) => {
    setBg(value)
  }

   console.log('route app', bg);

  return (
    <div style={!bg ? { backgroundColor: "white" } : { backgroundColor: '	#222024'}}>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/toursPage' element={<ToursPage />} />
        <Route path="/:region" element={<RegionPage updateData={updateData} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/scheduler' element={<Scheduler />} />
        <Route path="/albumPage" element={<AlbumPage/>}/>
        <Route path="/article" element={<ArticlesPage/>}/>
        <Route path="/article/:articleId" element={<Article/>}/>
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
