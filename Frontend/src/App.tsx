import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import EmpleadoDatos from './pages/empleados/EmpleadoDatos';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/empleados' element={<EmpleadoDatos/>}/>
        </Routes>
      </Router>
      <Footer />
      </>
  );
}

export default App;
