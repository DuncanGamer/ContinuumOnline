import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const cors = require('cors');
import 'tw-elements';

import {
  
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import SignUp from './components/SignUp';
import NavDesktop from './components/NavDesktop';
import Concertunic from './components/Concertunic';
import Footer from './components/Footer';
import London from './components/London';
import Barcelona from './components/Barcelona';
import Artist from './components/Artist';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <NavDesktop/>
   <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/Concertunic/:id' element={<Concertunic/>}/>
      <Route path='/London' element={<London/>}/>
      <Route path='/Barcelona' element={<Barcelona/>}/>
      <Route path='/Artist' element={<Artist/>}/>
  </Routes>
 <Footer/>
  </BrowserRouter>
);


