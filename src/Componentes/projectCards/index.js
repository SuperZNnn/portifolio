import React from "react";
import './style.css';

const ProjectCards = (props) => {

    return (
        <div className="projectCards">
            <div className="line1">
                <h1>{props.projectName}</h1>
            </div>
            <div className="line2">
                <img src={props.projectImgSrc} alt="thumb"/>
                <p>{props.projectDescrip}</p>

                <h2 className="usedTecnologies">Tecnologias</h2>
                <div className="tecnologies">
                    {props.projectTecs.map((tec, index) => (
                        <p key={index}><i>{tec}</i></p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCards;