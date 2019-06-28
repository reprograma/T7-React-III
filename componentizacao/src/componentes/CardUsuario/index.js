import React from 'react'

class CardUsuario extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            valorInput: ''
        }
    }
    render() {
        return (
            <section>
                <div>
                    <p> Dados do Usuario</p>

                    <input type="text" onChange={(e) =>{
                        this.setState({
                            valorInput: e.target.value
                        })
                        this.props.getNome(this.state.valorInput)
                    } }></input>
                    <button onClick={() => this.props.getNome(this.state.valorInput)}>OK</button>
                </div>

            </section>
        )
    }
}

export default CardUsuario