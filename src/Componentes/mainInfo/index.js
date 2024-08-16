import React from "react";
import './style.css';
import { Routes, Route } from "react-router-dom";
import SobreContainer from "./sobre";
import ProjetosContainer from "./projetos";
import HabiContainer from "./habilidades";

const MainInfo = () => {
    return (
        <Routes>
            <Route path="/projetos" element={<ProjetosContainer />} />
            <Route path="/habilidades" element={<HabiContainer/>} />
            <Route path="/" element={<SobreContainer />} />
        </Routes>
    )
}

export default MainInfo;
