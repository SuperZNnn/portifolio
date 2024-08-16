import './App.css';
import Header from './Componentes/header';
import SideInfo from './Componentes/sideInfo';
import MainInfo from './Componentes/mainInfo';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  useEffect(()=>{
    document.title = "Rafael Soares"
  })

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <MainInfo/>
        <SideInfo/>
      </div>
    </BrowserRouter>
  );
}

export default App;
