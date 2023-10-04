import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
/* import Change_password from './pages/change_password/change_password'; */
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <>
      {/* <Navbar/> */}
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          {/* <Route path='/change_password' element={<Change_password/>}/> */}
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
      <Footer/>
      </>
  );
}

export default App;
