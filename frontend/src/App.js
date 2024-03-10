import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Councellor from './components/Councellor';
import Visitor from './components/Visitor';
import CreateAdd from './components/CreateAdd';
import Hello from './components/Hello';
import ProductList from './components/ProductList';
import Contact from './components/Contact';
import FetchRegistration from './components/FetchRegistration';
import Data from './components/Data';
import Invalid from './components/Invalid';
import AboutUs from './components/AboutUs';
import History from './components/History';

function App() {
  const [recentAds, setRecentAds] = useState([]);

  const handleAdCreated = (newAd) => {
    setRecentAds([newAd, ...recentAds]);
  };

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/signup' element={<Signup />} exact />
          <Route path='/signin' element={<Signin />} exact />
          <Route path='/Councellor' element={<Councellor />} exact />
          <Route path='/visitor' element={<Visitor />} exact />
          <Route path='/Createadd' element={<CreateAdd onAdCreated={handleAdCreated} />} exact />
          <Route path='/contact' element={<Contact />} exact />
          <Route path='/Aboutus' element={<AboutUs />} exact />
          <Route path='/Data' element={<Data />} exact />


          <Route path='/Registration' element={<FetchRegistration />} exact />

          {/* ... (other routes) */}
          <Route path='/History' element={<History recentAds={recentAds} />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
