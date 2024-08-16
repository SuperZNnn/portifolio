import React from "react";
import './style.css'

const HabiCard = (props) => {

    return (
        <div className="habiCards" style={{borderColor: props.borderColor}}>
            <div className="line-1" style={{backgroundColor: props.backColorPrimary}}>
                <h1>{props.habilidade}</h1>
            </div>
            <div className="line-2" style={{backgroundColor: props.backColorSecondary}}>
                <div className="habiBar" style={{borderColor: props.backColorPrimary}}>
                    <div className="fuller" style={{width: props.domain,backgroundColor: props.borderColor}}/>
                </div>
                <p>{props.type}</p>
            </div>
        </div>
    )
}

export default HabiCard;