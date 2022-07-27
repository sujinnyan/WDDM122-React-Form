import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Head/Header"
import "./App.css"
import Footer from "./components/Footer"
import Signup from "./components/Signup"
import Signin from "./components/Signin"
import Home from "./components/Hero/Home";



function App() {
  return (
    <>
    <Header />
    <Home/>
    <ToastContainer />
    <Routes>
    <Route path="/Signup" element={<Signup />}/>
    <Route path="/Signin" element={<Signin />}/>
    </Routes>
    <Footer />
    </>
  );
}


export default App