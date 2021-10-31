import React from 'react'
import Header from './Header'
import styled from 'styled-components'

const Container = styled.div`
    min-height: 100vh;
`

const Main = styled.div`
    padding-top: var(--header-height);
    min-height: 100vh;
`

const Layout: React.FC = ({ children }) => {
    return (
        <Container>
            <Header />
            <Main>{children}</Main>
        </Container>
    )
}

export default Layout
