import Cards from "./components/Cards/Cards"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import './App.css'

const App = () => {
  return (
    <div className="mx-auto"
    // style={{
    //   backgroundImage: `url("https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
      
    // }}  
    >
      <div className="mx-2">
      <Navbar />
      <Hero />
      <Cards />
      </div>
      
    </div>
  )
}

export default App
