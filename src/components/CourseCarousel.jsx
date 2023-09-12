import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const courses = [
  {
    title: "HTML & CSS",
    description: "Em inicio a jornada do Front-End, todo bom programador deve conhecer a didática do professor Guanabara.",
    imageUrl: "https://www.hostnet.com.br/wp-content/uploads/2020/10/curso-gratis-html5-css3-guanabara-hostnet-1024x576.jpeg",
  },
  {
    title: "JavaScript Básico",
    description: "Para aqueles que sonham em dominar a tríade do front-end, não é possível sem conhecer o JS, ainda mais com a perfeita didática do Guanabara",
    imageUrl: "https://i.ytimg.com/vi/BXqUH86F-kA/maxresdefault.jpg",
  },
  {
    title: "React JS Básico ao Avançado",
    description: "Beleza, já entendo como funciona a web, tenho conhecimento da tríade, e agora, como posso criar meus sites de uma forma otimizada? pois bem, eu recomendo o curso de React do Sujeito Programador na Udemy, extremamente detalhista e auxiliador",
    imageUrl: "https://i.ytimg.com/vi/0VetwgxjiBg/maxresdefault.jpg",
  },
  {
    title: "Curso 3",
    description: "Descrição do Curso 3.",
    imageUrl: "https://www.hashtagtreinamentos.com/wp-content/uploads/2021/11/Box-SQL-impressionador-1024x576.png",
  },
  {
    title: "Git e Github",
    description: "Nesse curso foi possivel entender toda a dinamica do versionamento de código, como clonar repositórios, como funciona essa questão de local e remoto.",
    imageUrl: "https://i.ytimg.com/vi/5BYm7UdCrX0/maxresdefault.jpg",
  },
];

function CourseCarousel() {
  return (
    <div id="Cursos" className="course-carousel p-36 bg-neutral-950 m-0">

      <Carousel>
        {courses.map((course, index) => (
          <div key={index}>
            <img className="w-full h-auto"src={course.imageUrl} alt={course.title} />
            <p className="legend">{course.title}</p>
            <p className="text-white ">{course.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CourseCarousel;
