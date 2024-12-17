import React, { useState } from 'react';
import "./App.css"
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { ToastContainer} from 'react-toastify';

const App = () => {

  const [mobileMenu,setMobileMenu] = useState(false);

  const closeMenu = () =>{
    setMobileMenu(false);
  }

  return (
    <>
    <ToastContainer/>
     <Sidebar closeMenu={closeMenu} mobileMenu={mobileMenu}/>
     <Main setMobileMenu={setMobileMenu}/> 
    </>
  )
}

export default App