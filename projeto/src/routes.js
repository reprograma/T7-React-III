import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'


//Páginas
import Home from './pages/Home/Home'
import LoginPage from './pages/LoginPage'

function estAutenticado() {
    if (localStorage.getItem('TOKEN')) {
        return true
    }
    else {
        return false
    }
}

class PrivateRoute extends React.Component {
    render() {
        const Componente = this.props.component
        if (estAutenticado()) {
            // componente rota tweets
            return <Route render={() => <Componente {...this.props}></Componente>}></Route>
        }
        else {
            // rota login
            return <Redirect to="/login"></Redirect>
        }
    }
}
const Roteamento = () => {
    return (
        <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={LoginPage} />
        </Switch>
    )
}

export default Roteamento
