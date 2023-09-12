import React from "react";
import minhaImagem from "./logo01ahg.png";
import { Link as ScrollLink } from "react-scroll";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black-400">
            Oi, sou o Higor
            <br className="hidden lg:inline-block text-sm" />Um amante da tecnologia e inovação
          </h1>
          <p className="mb-8 leading-relaxed text-lg">
            Meu nome é Higor Giovane, sou um estudante de Engenharia de Software na UniEvangélica, atualmente minha área de estudo se concentra no Front-End, mas tenho o conhecimento diversos das áreas de tecnologia
          </p>
          <div className="flex justify-center">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={700}
            className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg"
            >
            Contate-me
            </ScrollLink>
            <ScrollLink
            to="projects"
            smooth={true}
            duration={700}
            className="ml-4 inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
            Veja alguns projetos
            </ScrollLink>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="imagem"
            src={minhaImagem}
          />
        </div>
      </div>  
    </section>
  );
}