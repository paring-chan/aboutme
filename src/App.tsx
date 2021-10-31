import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './views/Home/index'
import NotFound from './views/NotFound'

const App = () => {
    return (
        <Layout>
            <Route
                render={({ location }) => (
                    <Switch location={location}>
                        <Route exact path="/" component={Home} />
                        <Route component={NotFound} />
                    </Switch>
                )}
            />
        </Layout>
    )
}

export default App
