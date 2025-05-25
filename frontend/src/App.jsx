import Navbar from "./components/Navbar"
import Plank from "./components/Plank"
import Book from "./components/Book"
import "./app.css"
import Door from "./components/Door"
function App() {


  return (
    <>
     <Navbar/>
   
     <div className="plank-wrapper">
    <Book />
    <Plank />
  </div>
    </>
  )
}

export default App
