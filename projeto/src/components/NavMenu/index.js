import React, { Component } from "react";
import navMenuStyles from "./navMenu.module.css";
import { Link, NavLink } from "react-router-dom"

export default class NavMenu extends Component {
  render() {
    return (
      <nav className={navMenuStyles.navMenu}>
        <ul className={navMenuStyles.navMenu__lista}>
          <li className={navMenuStyles.navMenu__item}>
            <a className={navMenuStyles.navMenu__link} href="/">
              Bem vindo(a): <br />
              <strong>{this.props.usuario}</strong>
            </a>
          </li>
          <li className={navMenuStyles.navMenu__item}>
            <Link className={navMenuStyles.navMenu__link} to="/">
              Página Inicial
            </Link>
          </li>
          <li className={navMenuStyles.navMenu__item}>
            <a className={navMenuStyles.navMenu__link} href="/hashtags">
              Hashtags
            </a>
          </li>
          <li className={navMenuStyles.navMenu__item}>

            {/* para redirecionar para link interno utilize o componente <Link></li>  
               para links externos, use a tag <a>
          */}
            <NavLink activeClassName="navMenu-ativo" className={navMenuStyles.navMenu__link} onClick={() => {
              localStorage.removeItem('TOKEN')
            }
            }
              to="/login">
              Logout
            </NavLink>

            {/* <NavLink activeClassName="novoTweet__status--invalido" className={navMenuStyles.navMenu__link} onClick={() => {
              localStorage.removeItem('TOKEN')
            }
            }
              to="/login">
              Logout
            </NavLink>

            <NavLink activeClassName="selected">FAQs</NavLink>

            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              FAQs
      </NavLink> */}
          </li>
        </ul>
      </nav>
    );
  }
}
