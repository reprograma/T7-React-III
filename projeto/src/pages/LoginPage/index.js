import React, { Component, Fragment } from 'react'
import Cabecalho from '../../components/Cabecalho'
import Widget from '../../components/Widget'

import './loginPage.css'

class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            aparecer: false,
            mensagem: ''
        }
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
                //chega como Response 
                if (!resp.ok)
                    throw resp; // throw envia a resposta pro catch e pula o then

                //.json() pega só a resposta do back
                //Tipo Promise: precisamos fazer outro then pra capturar o valor
                return resp.json()
            })
            .then((respJson) => {
                //se a reposta for 200 OK 
                //peguei o retorno do back e consigo usar como variável
                // console.log('resp OK', respJson)
                localStorage.setItem('TOKEN', respJson.token)
                this.props.history.push('/')
            })
            .catch((err) => {
                //.json() pega só a resposta do back
                //Tipo Promise: precisamos fazer outro .then pra capturar o valor
                err.json()
                    .then(res => {
                        this.setState({
                            aparecer: true,
                            mensagem: res.message
                        })
                    }
                    )
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
                                        ref={(elemento) => {
                                            this.inputLogin = elemento
                                        }}
                                        className="loginPage__input"
                                        type="text"
                                        id="login"
                                        name="login" />
                                </div>
                                <div className="loginPage__inputWrap">
                                    <label className="loginPage__label" htmlFor="senha">Senha</label>
                                    <input className="loginPage__input"
                                        type="password" id="senha" name="senha"
                                        ref={(elemento) => this.inputSenha = elemento}
                                    />
                                </div>

                                {/* {this.state.aparecer === true ? */}
                                {this.state.aparecer === true ? <div className="loginPage__errorBox">
                                    {this.state.mensagem}
                            </div> : ''}
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