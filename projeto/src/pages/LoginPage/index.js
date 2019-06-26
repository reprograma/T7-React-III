import React, { Component, Fragment } from 'react'
import Cabecalho from '../../components/Cabecalho'
import Widget from '../../components/Widget'

import './loginPage.css'

class LoginPage extends Component {
    constructor(props){
        super(props)
    }   

    fazerLogin = (e) => {
        //console.log(this.inputLogin.value)
        e.preventDefault()
        const dadosDeLogin = {
            login: this.inputLogin.value,
            senha: this.inputSenha.value
        }
      //  console.log(dadosDeLogin)

        fetch('http://localhost:3001/login', {
            method: 'POST',
            body: JSON.stringify(dadosDeLogin)
        })
        .then(resp => {
             if (!resp.ok)
                 throw resp;               
            return resp.json()
        })
        .then((respJson) => {
           // console.log('resp', respJson)
            localStorage.setItem('TOKEN', respJson.token)
            this.props.history.push('/')
        })
        .catch((err) => {
              err.json()
              .then(res => alert(res.message))
        })
    }

    render() {
      return (
            <Fragment>
                <Cabecalho />
                <div className="loginPage">
                    <div className="container">
                        <Widget>
                            <h2 className="loginPage__title">Seja bem vindo!</h2>
                            <form className="loginPage__form" action="/" onSubmit={this.fazerLogin}>
                                <div className="loginPage__inputWrap">
                                    <label className="loginPage__label" htmlFor="login">Login</label> 
                                    <input 
                                    ref = {(elemento) =>{
                                       // console.log(elemento)
                                         this.inputLogin = elemento
                                        }}
                                    className="loginPage__input" 
                                    type="text" 
                                    id="login" 
                                    name="login"/>
                                </div>
                                <div className="loginPage__inputWrap">
                                    <label className="loginPage__label" htmlFor="senha">Senha</label> 
                                    <input className="loginPage__input" 
                                    type="password" id="senha" name="senha"
                                    ref={(elemento) => this.inputSenha = elemento}
                                    />
                                </div>
                                 {/* <div className="loginPage__errorBox">
                                    Mens]agem de erro!
                                </div>  */}
                                <div className="loginPage__inputWrap">
                                    <button className="loginPage__btnLogin" type="submit">
                                        Logar
                                    </button>
                                </div>
                            </form>
                        </Widget>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default LoginPage