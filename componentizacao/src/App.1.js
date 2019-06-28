import React from 'react';
import './App.css';
import Menu from './componentes/NavMenu'
import CardUsuario from './componentes/CardUsuario/index'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      nome: ''
    }
  }

  pegarNome = (valor) => {
    this.setState({
      nome: valor
    })
  }

  render() {
    return (
      <div className="App">
         <Menu nomeAlunx={this.state.nome}></Menu>
        <div className="texto">
          Bem Vindo ao Reprograma

          {this.state.nome !== '' ?  ', ' : ''} 
          
          {this.state.nome}
      </div>
        <CardUsuario getNome={this.pegarNome}></CardUsuario>
      </div>
    );
  }
}

export default App;
