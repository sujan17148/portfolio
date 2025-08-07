import { projects } from "../ProjectsObject";
import { FiGithub } from "react-icons/fi";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function Projects() {
  return (
    <div
      id="Project-section"
      className="min-h-[calc(100dvh-140px)] w-full bg-white  p-5 flex flex-col justify-center items-center"
    >
      <p className="text-3xl font-bold mb-7 text-light-secondary">
        My Projects
      </p>
      <div className="projects flex  gap-7.5 flex-wrap items-center justify-center w-full">
        {projects?.slice(0,3).map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            tags={project.tags}
            githubLink={project.githubLink}
            liveDemoLink={project.liveDemoLink}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  image,
  description,
  tags,
  githubLink,
  liveDemoLink,
}) {
  return (
    <div className="group aspect-[14/16] max-w-92 w-full sm:w-[calc(50%-15px)] bg-light-primary border border-[#EDE0D4] hover:shadow-[5px_5px_10px_#d3d3d3]  flex flex-col rounded-xl overflow-hidden items-start hover:-translate-y-2 transition duration-200 ease-linear">
      <img
        src={image}
        alt="projectThumbnail"
        className="h-1/2 group-hover:scale-110 overflow-hidden transition duration-200 ease-linear"
      />
      <div className="bottom-right  text-left px-3">
        <p className="font-bold text-2xl text-light-secondary mt-3">{title}</p>
        <p className=" font-normal text-base line-clamp-2 text-[#615c55] my-3">
          {description}
        </p>
        <div className="tags flex items-center pl-3 my-3 gap-2.5 text-base text-light-secondary font-medium capitalize">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#F4F7FA] whitespace-nowrap text-sm rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="buttons flex items-center  text-center gap-2.5">
          {!!liveDemoLink && (
            <a
              className="text-light-primary flex items-center flex-grow-1 gap-4 justify-center bg-[#1C1C1C] py-2 px-4 rounded whitespace-nowrap  hover:scale-105 overflow-hidden transition duration-300 ease-linear"
              href={liveDemoLink}
              target="_blank"
            >
              <BsBoxArrowUpRight /> Live Demo
            </a>
          )}
          <a
            className="bg-light-primary flex items-center gap-4 flex-grow-1 justify-center text-dark-primary border border-[#EDE0D4] whitespace-nowrap  py-2 px-4 rounded hover:scale-105 overflow-hidden transition duration-300 ease-linear"
            href={githubLink}
            target="_blank"
          >
            <FiGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
