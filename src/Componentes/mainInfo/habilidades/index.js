import React from "react";
import HabiCard from "../../habilidadesCard";

const HabiContainer = () => {

    return (
        <section className="mainInfo">
            <div className="habiCardContainer">
                <HabiCard
                borderColor='#b6b60d'
                backColorPrimary='#ffff1b'
                backColorSecondary='#ffff60'
                habilidade='Java Script'
                domain='90%'
                type='Avançado'/>

                <HabiCard
                borderColor='#a51fff'
                backColorPrimary='#cb7dff'
                backColorSecondary='#6e3595'
                habilidade='PHP'
                domain='70%'
                type='Mediano - Avançado'/>

                <HabiCard
                borderColor='#0a7685'
                backColorPrimary='#86f1ff'
                backColorSecondary='#3fa5b3'
                habilidade='React'
                domain='85%'
                type='Avançado'/>

                <HabiCard
                borderColor='#172751'
                backColorPrimary='#2D364F'
                backColorSecondary='#46557e'
                habilidade='MySql'
                domain='70%'
                type='Mediano - Avançado'/>
            </div>
        </section>
    )
}

export default HabiContainer