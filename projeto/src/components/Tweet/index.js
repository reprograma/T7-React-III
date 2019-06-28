import React, { Component } from 'react'
import './tweet.css'

class Tweet extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const { usuario, conteudo, totalLikes }  = this.props
       // const { nome, foto, login } = this.props.usuario
       console.log('props do tweet', this.props._id)
        return (
            <article className="tweet">
                <div className="tweet__cabecalho">
                    <img className="tweet__fotoUsuario" src={usuario.foto} alt="" />
                    <span className="tweet__nomeUsuario">{usuario.nome}</span>
                    <a href="/"><span className="tweet__userName">@{usuario.login}</span></a>
                </div>
                <p className="tweet__conteudo">
                    <span>
                        {conteudo}
                    </span>
                </p>
                <footer className="tweet__footer">
                    <button className="btn btn--blue btn--remove" onClick={() => this.props.remove(this.props._id)}>
                        X
                    </button>
                </footer>
            </article>
        )
    }
}

export default Tweet