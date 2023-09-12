import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link as ScrollLink} from "react-scroll";


export default function Navbar() {
  return (
    <header className="bg-neutral-950 md:sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p className="title-font font-medium text-white mb-4 md:mb-0">
          <ScrollLink
          to="about"
          smooth={true}
          duration={700}
          className="ml-3 text-xl cursor-pointer"
        >
        Ahágê DEV
        </ScrollLink>
        </p>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <ScrollLink
          to="projects"
          smooth={true}
          duration={700}
          className="mr-5 text-sky-600  hover:text-white"
        >
        Projetos
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={700}
          className="mr-5 text-sky-600  hover:text-white"
        >
        Habilidades
        </ScrollLink>
        <ScrollLink
          to="Cursos"
          smooth={true}
          duration={700}
          className="mr-5 text-sky-600  hover:text-white"
        >
        Cursos
        </ScrollLink>
        </nav>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={1000}
          className="inline-flex text-white items-center bg-sky-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
        Fale Comigo <ArrowRightIcon className="w-4 h-4 ml-1" />
        </ScrollLink>
      </div>
    </header>
  );
}