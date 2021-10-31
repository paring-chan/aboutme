import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './views/Home/index'

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Layout>
    )
}

export default App
