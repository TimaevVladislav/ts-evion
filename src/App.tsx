import React from 'react'
import './css/index.css'
import {Route, Routes} from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Blogs from "./pages/Blogs"
import Faq from "./pages/Faq"
import Contact from "./pages/Contact"
import Navigation from "./components/Navigation"

export default function App() {
  return (
   <>
       <Navigation />
       <Routes>
           <Route path="/" element={ <Home /> } />
           <Route path="/about" element={ <About /> } />
           <Route path="/services" element={ <Services /> } />
           <Route path="/blogs" element={ <Blogs /> } />
           <Route path="/faq" element={ <Faq /> } />
           <Route path="/contact" element={ <Contact /> } />
       </Routes>
   </>
  )
}

