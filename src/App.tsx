import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Layout from './components/Layout'
import Home from './views/Home/index'
import NotFound from './views/NotFound'

const App = () => {
    return (
        <Layout>
            <Route
                render={({ location }) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            timeout={500}
                            classNames="page-transition"
                        >
                            <Switch location={location}>
                                <Route exact path="/" component={Home} />
                                <Route component={NotFound} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}
            />
        </Layout>
    )
}

export default App
