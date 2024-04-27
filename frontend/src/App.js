import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Visitor from './components/Visitor';
import CreateAdd from './components/CreateAdd';
import Contact from './components/Contact';
import Role from './components/Role';
import Data from './components/Data';
import Invalid from './components/Invalid';
import AboutUs from './components/AboutUs';
import History from './components/History';
import Dropdownmenu from './components/Dropdownmenu';
import InfluencerNavbar from './components/Influencer';
import InfluencerDashboard from './components/InfluencerDashboard';
import BrandPage from './components/BrandPage';
import ManagerDashboard from './components/ManagerDashboard';
function App() { 
  const [recentAds, setRecentAds] = useState([]); 
 
  const handleAdCreated = (newAd) => { 
    setRecentAds([newAd, ...recentAds]); 
  }; 
 
  return ( 
    <React.Fragment> 
      <Header> 
       
                <Header /> 
         
      </Header> 
      <main> 
      <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/signup' element={<Signup />} exact />
          <Route path='/signin' element={<Signin />} exact />
          <Route path='/visitor' element={<Visitor />} exact />
          <Route path='/Createadd' element={<CreateAdd onAdCreated={handleAdCreated} />} exact />
          <Route path='/contact' element={<Contact />} exact />
          <Route path='/Aboutus' element={<AboutUs />} exact />
          <Route path='/Data' element={<Data />} exact />
          <Route path='/Role' element={<Role />} exact />
          <Route path='/History' element={<History recentAds={recentAds} />} exact />
          <Route path="/influencer" element={<InfluencerNavbar />} />
          <Route path="/influencer-dashboard" element={<InfluencerDashboard />} />
          <Route path="/brand" element={<BrandPage />} />
          <Route path="/manager-dashboard" element={<ManagerDashboard />} />

        </Routes>
      </main> 
    </React.Fragment> 
  ); 
} 
 
export default App;