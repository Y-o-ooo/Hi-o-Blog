import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from 'pages/login'
import BasicLayout from 'layouts/basic'
import history from 'utils/history'
import { ConnectedRouter } from 'connected-react-router'
import { hot } from 'react-hot-loader'

@hot(module)
class App extends Component {
    render() {
        return (
            <>

                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path="/login" component={Login} exact/>
                        <Route path="/" component={BasicLayout}/>
                    </Switch>
                </ConnectedRouter>
            </>
        )
    }
}


export default App
