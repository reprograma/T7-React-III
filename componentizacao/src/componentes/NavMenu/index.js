import React from 'react'

const Menu = (props) => {
    console.log('x do Menu', props)
    return (
        <nav className="menu">
            Bem Vindx Alunx: {props.nomeAlunx} 
            {/* <ul className="menu">
                <li>
                    Home
          </li>
                <li>
                    Teste
          </li>
            </ul> */}
        </nav>
    )
}

export default Menu