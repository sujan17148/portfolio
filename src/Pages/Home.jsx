import About from "./About";
import Contact from "./Contact";
import Project from "./Projects";

export default function Home(){
    return <>
    <div style={{ background:'radial-gradient(circle,rgba(27, 27, 46, 1) 0%, #0A0A0A 38%)'}} className="flex h-[calc(100vh-56px)] flex-col items-center justify-center">
           <h1 className="font-black text-7xl mb-10 text-center custom-linear-gradient custom-background-text">Frontend Developer</h1>
           <p className="text-3xl font-medium text-gray-400 mb-10">Crafting Digital Experiences</p>
           <p className="text-lg text-center line-clamp-2 text-gray-400  mb-10 w-1/2">I create beautiful, responsive web applications with modern technologies. Passionate about clean code, user experience, and bringing ideas to life.</p>

           <div className="buttons flex gap-5 mb-10">
            <button className="custom-linear-gradient rounded-3xl font-bold text-white text-lg p-3 whitespace-nowrap">View My Work</button>
            <button className="border-2 border-gray-800 hover:bg-gray-800 rounded-3xl font-bold text-white text-lg p-3 whitespace-nowrap">Get In Touch</button>
           </div>
  </div>
  <About/>
  <Project/>
  <Contact/>
    </>
}