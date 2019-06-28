import React, {useState} from 'react';
import './App.css';
import Menu from './componentes/NavMenu'
import CardUsuario from './componentes/CardUsuario/index'

function App() {
  const [nome, setNome] = useState('')
  
      return (
      <div className="App">
         <Menu nomeAlunx={nome}></Menu>
        <div className="texto">
          Bem Vindo ao Reprograma
          {nome !== '' ?  ', ' : ''}           
          {nome}
      </div>
        <CardUsuario setNome={setNome}></CardUsuario>
      </div>
    );
  
}

export default App;
