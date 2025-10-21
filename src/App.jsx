import Hero from "./components/Hero";
import Navbar from "./components/Nav";
import Service from "./components/Service";
import SubNav from "./components/SubNav";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SubNav/>
      <Welcome/>
       <Service/> 
      {/* //  </> */}
    </div>
  )
}

export default App