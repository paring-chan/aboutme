import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './views/Home'
import NotFound from './views/NotFound'
import { AnimatePresence } from 'framer-motion'
import Projects from './views/Projects'
import Skills from './views/Skills'
import ProjectDetails from './views/ProjectDetails'

const App = () => {
    return (
        <Layout>
            <Route
                render={({ location }) => (
                    <AnimatePresence exitBeforeEnter>
                        <Switch location={location} key={location.pathname}>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/skills" component={Skills} />
                            <Route
                                exact
                                path="/projects"
                                component={Projects}
                            />
                            <Route
                                exact
                                path="/projects/:id"
                                component={ProjectDetails}
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </AnimatePresence>
                )}
            />
        </Layout>
    )
}

export default App
