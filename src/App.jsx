import Choose from "./components/Choose";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Nav";
import Service from "./components/Service";
import SubNav from "./components/SubNav";
import Vision from "./components/Vision";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SubNav/>
      <Welcome/>
      <Service/> 
      <Vision/> 
      <Choose/>
      <Footer/>
      {/* //  </> */}
    </div>
  )
}

export default App