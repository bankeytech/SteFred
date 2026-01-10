import React from 'react'
import Navbar from "../Home/Nav"
import Footer from "../Home/Footer";
import Content from './Content';
import Vision from "./Vision"
import Value from './Value';

const About = () => {
  return (
    <div>
       <Navbar/>
       <Content/>
       <Vision/>
       <Value/>
       <Footer/>
    </div>
  )
}

export default About