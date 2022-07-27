import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Head/Header"
import "./App.css"
import Footer from "./components/Footer"
import Signup from "./components/Signup"
import Signin from "./components/Signin"
import "../src/components/Hero/Home.css"
import { Typewriter } from 'react-simple-typewriter'



function App() {
  return (
    <>
    <Header />
    <section className='hero' id='home'>  
          <div className='container f_flex top'>
              <div className='left top'>
                  <h3>WELCOME TO FORM.</h3>
                  <h1>Hello, We are <span>FORM. </span></h1>
                  <h2>
                      a
                      <span>
                        
                        <Typewriter
                        words={[' Professional ', ' Unique', ' Essencial' ]}
                        loop={3}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        />
                    
                    </span>

                </h2>

                 <p>Today, I will be walking you through the creation of a login page using HTML, CSS and JavaScript. But don’t worry. This is your first login page, which means the code is as simple as possible and there will be an explanation to accompany each piece of code.</p>

          <div className='hero_btn'>
              <div className='col_1'>
                  
                  <div className='button'>
                      <button className='btn_shadow'>
                          <i className='fab fa-facebook-f'><a href="#"></a></i>
                      </button>
                      <button className='btn_shadow'>
                          <i className='fab fa-instagram'><a href="#"></a></i>
                      </button>
                      <button className='btn_shadow'>
                          <i className='fab fa-youtube'><a href="#"></a></i>
                      </button>
                  </div>
              </div>
          </div>
        </div>
      </div>
      </section>
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