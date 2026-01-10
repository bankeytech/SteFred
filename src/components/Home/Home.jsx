import Choose from "./Choose";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Nav";
import Service from "./Service";
import SubNav from "./SubNav";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SubNav/>
      <Welcome/>
      <Service/>      
      <Choose/>
      <Footer/>
      {/* //  </> */}
    </div>
  )
}

export default Home