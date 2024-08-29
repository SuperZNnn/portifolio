import React from "react";
import ProjectCards from "../../projectCards";

const ProjetosContainer = () => {

    return (
        <section className="mainInfo">
            <a href="https://freequiz.xyz" target="blank">
                <ProjectCards
                projectName="Free Quiz"
                projectImgSrc="assets/projectThumbs/freequiz.jpg"
                projectDescrip="Plataforma simples de criação de Quizzes"
                projectTecs={["HTML","CSS","JavaScript", "PHP"]}
                />
            </a>
            <a href="https://control-it.rafaelsoares.online" target="blank">
                <ProjectCards
                projectName="Control It"
                projectImgSrc="assets/projectThumbs/controlit.png"
                projectDescrip="Plataforma de apresentações"
                projectTecs={["REACT.JS","PHP",]}
                />
            </a>
        </section>
    )
}

export default ProjetosContainer;