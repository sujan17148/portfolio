import { Route,Routes, useParams } from "react-router-dom";
import Header from "./Components/Header/Header";
import About from "./Pages/About"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import Footer from "./Components/Footer/Footer";
import Details from "./Pages/Details";

export default function App(){
  
  return <>
  <Header/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/projects" element={<Projects/>}/>
  <Route path="/contact" element={<Contact/>}/>
  {/* <Route path="/details:id" element={<Details/>}/> just for params and uselocation that it */}
</Routes>
<Footer/>
  </>
}