import { FiGithub,FiLinkedin,FiTwitter,FiMail } from "react-icons/fi";
export default function Footer(){
    return (
      <footer className="py-10 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-medium mb-4">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Open to new opportunities and interesting projects. 
                Let's create something great together.
              </p>
              <div className="links flex gap-5">
            <a className="hover:text-light-accent text-xl" target="_blank" href="https://github.com/sujan17148"> <FiGithub /></a>
            <a className="hover:text-light-accent text-xl" target="_blank" href="https://www.linkedin.com/in/sujan-sah-01109226a/"> <FiLinkedin /></a>
            <a className="hover:text-light-accent text-xl" target="_blank" href="https://x.com/Suzan6225667317"> <FiTwitter /></a>
            <a className="hover:text-light-accent text-xl"  href="mailto:sujansah.dev@gmail.com"> <FiMail /></a>
            </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Navigation</h4>
              <ul className="space-y-3">
                <li><a href="#home-section"    className="hover:text-light-accent  text-sm">Home</a></li>
                <li><a href="#about-section"   className="hover:text-light-accent  text-sm">About</a></li>
                <li><a href="#Project-section" className="hover:text-light-accent  text-sm">Projects</a></li>
                <li><a href="#contact-section" className="hover:text-light-accent  text-sm">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <div className="space-y-3 text-sm ">
                <a className="block" href="mailto:sujansah.dev@gmail.com">sujansah.dev@gmail.com</a>
                <p>Biratnagar, Nepal</p>
                <p>Available for freelance</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Frontend Developer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }
  