import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { IoIosGitMerge } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { SiAppwrite } from "react-icons/si";

import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

export default function About() {
  return (
    <div
      id="about-section"
      className="min-h-[50dvh] bg-white p-5 md:pt-25 flex flex-col justify-center md:px-10"
    >
      <div className="md:flex gap-5 md:w-3/4 mx-auto">
        <div className="profile  flex items-center justify-center mb-8 flex-col md:w-1/3">
          <div className="profile-pic group relative rounded-full h-20 w-20">
            <RxAvatar className="h-20 w-20  text-black relative z-2" />
          </div>
          <p className="font-bold text-2xl">Sujan Sah</p>
          <p className="font-normal text-base text-light-secondary">
            Frontend Developer
          </p>
          <div className="links flex gap-4 mt-2">
            <a
              className="hover:text-light-accent text-xl"
              href="https://github.com/sujan17148"
            >
              {" "}
              <FiGithub />
            </a>
            <a
              className="hover:text-light-accent text-xl"
              href="https://www.linkedin.com/in/sujan-sah-01109226a/"
            >
              {" "}
              <FiLinkedin />
            </a>
            <a
              className="hover:text-light-accent text-xl"
              href="https://x.com/Suzan6225667317"
            >
              {" "}
              <FiTwitter />
            </a>
            <a
              className="hover:text-light-accent text-xl"
              href="mailto:sujansah.dev@gmail.com"
            >
              {" "}
              <FiMail />
            </a>
          </div>
        </div>
        <div className="about-me w-full md:w-2/3 mx-auto">
          <h1 className="text-black font-bold text-2xl">About Me</h1>

          <p className="text-base font-normal text-light-secondary mb-3">
            Hi, I’m <strong>Sujan Sah</strong>, a frontend developer based in{" "}
            <strong>Nepal</strong>. I’m passionate about building intuitive and
            visually appealing web applications. I focus on writing clean,
            efficient code that transforms complex problems into simple,
            user-friendly solutions.
          </p>

          <p className="text-base font-normal text-light-secondary mb-3">
            I’m currently expanding my skills towards full-stack development and
            thrive on continuous learning. Staying updated with modern web
            trends motivates me to keep pushing boundaries and delivering
            impactful projects.
          </p>

          <div className="facts">
            <h1 className="font-bold text-black text-xl">Quick Facts</h1>
            <p className="flex justify-between items-center font-normal text-sm my-1">
              <span>Experience:</span>{" "}
              <span className="text-light-accent">Growing Every Day</span>
            </p>
            <p className="flex justify-between items-center font-normal text-sm my-1">
              <span>Focus:</span>{" "}
              <span className="text-light-accent">Frontend → Full-Stack</span>
            </p>
            <p className="flex justify-between items-center font-normal text-sm my-1">
              <span>Passion:</span>{" "}
              <span className="text-light-accent">Clean, Readable Code</span>
            </p>
            <p className="flex justify-between items-center font-normal text-sm my-1">
              <span>Goal:</span>{" "}
              <span className="text-light-accent">
                Build Amazing, User-Centric Apps
              </span>
            </p>
          </div>

          <TechStack />
        </div>
      </div>
    </div>
  );
}

function TechStack() {
  const skills = [
    { name: "HTML", icon: FaHtml5, color: "#E34C26" },
    { name: "CSS", icon: IoLogoCss3, color: "#1572B6" },
    {name: "JavaScript",icon: DiJavascript1,color: "#F7DF1E"},
    {name: "Tailwind",icon: RiTailwindCssFill,color: "#38BDF8"},
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Git", icon: IoIosGitMerge, color: "#F05032" },
    { name: "Appwrite", icon: SiAppwrite, color: "#F02E65" },
  ];
  return (
    <div className="tech-stack bg-white my-5">
      <h1 className="font-bold text-2xl">Tech Stack</h1>
      <div className="techs flex flex-wrap  gap-5 my-2">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-1.5 aspect-square w-20  group hover:scale-105 transition duration-300 ease-linear"
            >
              <IconComponent
                style={{ "--hover-color": skill.color }}
                className="text-2xl bg-light-accent p-2 text-white w-12 h-12 rounded 
             group-hover:bg-transparent group-hover:text-[var(--hover-color)]
             transition-colors duration-300 ease-linear"
              />
              <p className="text-lg text-light-secondary">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
