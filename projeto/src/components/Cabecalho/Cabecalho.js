import React from 'react'
import './cabecalho.css'
// import './navMenu.css'

function Cabecalho(props){
return (
    <header className="cabecalho">
    <div className="cabecalho__container container">
        <h1 className="cabecalho__logo">
            <a href="/">Twitelum</a>
        </h1>
        {props.children}
    </div>
</header>
);
}
export default Cabecalho;
