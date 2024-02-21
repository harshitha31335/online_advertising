import logo from './logo.svg';
import React from 'react'
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup'; 
import Signin from './components/Signin';
import Councellor from './components/Councellor';
import Visitor from './components/Visitor';
import Appointment from './components/Appointment';
import Hello from './components/Hello';
import ProductList from './components/ProductList';
import Contact from './components/Contact'; 
import FetchRegistration from './components/FetchRegistration';

function App() {

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
          <Route path='/Appointment' element={<Appointment />} exact />
          <Route path='/Contact' element={<Contact />} exact />
          <Route path='/Registration' element={<FetchRegistration />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
