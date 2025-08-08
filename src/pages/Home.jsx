import { FiGithub,FiTwitter,FiLinkedin,FiMail } from "react-icons/fi";

export default function Home() {
  return (
    <div id="home-section" className="min-h-[calc(100dvh-70px)] flex justify-center items-center flex-col">
      <h1 className="text-5xl font-bold mb-5 text-center">
        Frontend <span className="text-light-accent">Developer</span>
      </h1>
      <p className="text-xl text-light-secondary font-medium text-center">
        Crafting digital experiences through clean code and thoughtful design
      </p>
      <div className="buttons flex items-center text-center gap-7 my-10">
            <a
              className="text-light-primary flex items-center flex-grow-1 gap-4 justify-center bg-[#1C1C1C] py-2 px-4 rounded whitespace-nowrap  hover:scale-105 overflow-hidden transition duration-300 ease-linear"
              href="#Project-section"
            >
               View Projects
            </a>
          <a
            className="bg-white flex items-center gap-4 flex-grow-1 justify-center text-dark-primary border border-[#EDE0D4] whitespace-nowrap  py-2 px-4 rounded hover:scale-105 overflow-hidden transition duration-300 ease-linear"
            href="#"
          >
          Download CV
          </a>
        </div>
        <div className="links flex gap-5">
            <a className="hover:text-light-accent" target="_blank" href="https://github.com/sujan17148"> <FiGithub className="text-3xl"/></a>
            <a className="hover:text-light-accent" target="_blank" href="https://www.linkedin.com/in/sujan-sah-01109226a/"> <FiLinkedin className="text-3xl"/></a>
            <a className="hover:text-light-accent" target="_blank" href="https://x.com/Suzan6225667317"> <FiTwitter className="text-3xl"/></a>
            <a className="hover:text-light-accent" href="mailto:sujansah.dev@gmail.com"> <FiMail className="text-3xl"/></a>
        </div>
    </div>
  );
}
