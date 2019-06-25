import React from 'react'
import { Switch, Route } from 'react-router-dom'

//Páginas
import Home from './pages/Home/Home'
import LoginPage from './pages/LoginPage'

const Roteamento = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginPage} />
        </Switch>
    )
}

export default Roteamento
