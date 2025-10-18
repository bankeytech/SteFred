import Hero from "./components/Hero";
import Navbar from "./components/Nav";
import SubNav from "./components/SubNav";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SubNav/>
      <Hero/>
    </div>
  )
}

export default App