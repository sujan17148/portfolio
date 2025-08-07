import { useState,useRef } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Header(){
    const underLineRef=useRef()
function showUnderline(e){
    if(e.target.tagName.toLowerCase()=="a"){
        const allAnchorTags=e.currentTarget.querySelectorAll("a")
        allAnchorTags.forEach(a => {
            a.classList.remove("text-light-accent")
        });
        e.target.classList.add("text-light-accent")
        const Rect=e.target.getBoundingClientRect()
          underLineRef.current.style.width=`${Rect.width}px`
          underLineRef.current.style.left=`${Rect.left-underLineRef.current.parentElement.getBoundingClientRect().left}px`
    }
}

    return <div className="h-[70px] fixed top-0 z-5 w-full  shadow-lg  bg-white flex items-center p-5 md:px-10  justify-between">
             <p className="text-2xl font-bold text-light-accent">Sujan Sah</p>
             <ul onClick={(e)=>showUnderline(e)} className="links relative md:flex gap-5 items-center font-medium hidden">
             <li className="hover:text-light-accent"><a className="text-light-accent" href="#home-section">Home</a></li>
             <li className="hover:text-light-accent"><a href="#about-section">About</a></li>
             <li className="hover:text-light-accent"><a href="#Project-section">Projects</a></li>
             <li className="hover:text-light-accent"><a href="#contact-section">Contact Us</a></li>
             <div className="absolute top-6 left-0 w-[47px] h-0.5 bg-light-accent transition-[left,width] duration-300 ease-linear" ref={underLineRef}></div>
             </ul>
             <MobileNavbar/>
    </div>
}
function MobileNavbar(){
    const[isMenuVisible,setIsMenuVisible]=useState(false)
         return <div className="relative md:hidden">
                <GiHamburgerMenu className="text-2xl" onClick={()=>setIsMenuVisible(true)} />
                <div className={`mobile-menu absolute -top-7 -right-5 z-10 bg-white p-5 w-screen h-[120dvh]   transition duration-300 ease-linear ${isMenuVisible ? "translate-x-0":"translate-x-full"}`}>
                <p className="text-2xl font-bold text-light-accent">Sujan Sah</p>
                <IoMdClose  className="absolute top-5 right-5 text-3xl" onClick={()=>setIsMenuVisible(false)}/>
                <ul className="links font-medium space-y-1 mt-3">
               <li><a href="#home-section" onClick={()=>setIsMenuVisible(false)}>Home</a></li>
               <li><a href="#about-section" onClick={()=>setIsMenuVisible(false)}>About</a></li>
               <li><a href="#Project-section" onClick={()=>setIsMenuVisible(false)}>Projects</a></li>
               <li><a href="#contact-section" onClick={()=>setIsMenuVisible(false)}>Contact Us</a></li>
             </ul>
                </div>
         </div>
}