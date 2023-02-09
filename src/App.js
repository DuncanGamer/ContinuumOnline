import HomePage from './pages/HomePage'
import React from 'react'
import {Route,BrowserRouter,Routes,} from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Concertunic from './pages/Concertunic';
import London from './pages/London';
import Barcelona from './pages/Barcelona';
import Artist from './pages/Artist';
import ConcertForm from './pages/ConcertForm';
import NavDesktop from './components/NavDesktop';
import Footer from './components/Footer';
import PostProvider from './Context/concertsContext';

const App = () => {
  return (
    <> 
    
    <NavDesktop/>
     
     <PostProvider>
    
        <Routes>
          
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/Concertunic/:id' element={<Concertunic/>}/>
          <Route path='/London' element={<London/>}/>
          <Route path='/Barcelona' element={<Barcelona/>}/>
          <Route path='/Artist' element={<Artist/>}/>
          <Route path='/ConcertForm' element={<ConcertForm/>}/>
         </Routes>
         </PostProvider>
        
        <Footer/>
    
      
      

    </>
  )
}

export default App
