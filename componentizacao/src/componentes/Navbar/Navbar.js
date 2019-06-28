import React from 'react'
import { connect } from 'react-redux'
import { deslogaUsuario, alteraFiltro } from '../../redux/actions'
import { Link, withRouter } from 'react-router-dom'
import Menu from '../Menu/Menu'
import logo from './logo.png'
import './Navbar.css'

// <Navbar usuario={usuario} deslogaUsuario={deslogaUsuario} />
// const props = { usuario: usuario, deslogaUsuario: deslogaUsuario, alteraFiltro: alteraFiltro }
function Navbar(props) {
  return (
    <header className="navbar">
      <Link to="/">
        <img className="navbar__logo" src={logo} alt="Logo" />
      </Link>

      <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario} alteraFiltro={props.alteraFiltro} />
    </header>
  )
}

export default withRouter(
  connect(
    (state) => ({ usuario: state.usuario }),
    { deslogaUsuario, alteraFiltro }
  )(Navbar)
)