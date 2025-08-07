import Header from "./Components/Header";
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects";
import Contact from "./pages/Contact"
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";

export default function App(){
  return <div className=" min-h-[100dvh]">
    <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
toastClassName="custom-toast"
/>
    <Header/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
  </div>
}