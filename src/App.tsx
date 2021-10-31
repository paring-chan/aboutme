import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './views/Home'
import NotFound from './views/NotFound'
import { AnimatePresence } from 'framer-motion'

const App = () => {
    return (
        <Layout>
            <Route
                render={({ location }) => (
                    <AnimatePresence exitBeforeEnter>
                        <Switch location={location} key={location.key}>
                            <Route exact path="/" component={Home} />
                            <Route component={NotFound} />
                        </Switch>
                    </AnimatePresence>
                )}
            />
        </Layout>
    )
}

export default App
