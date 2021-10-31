import React from 'react'
import styled from 'styled-components'
import HomeSection from './Sections/Home'

const Container = styled.div`
    height: 100%;
`

const Home: React.FC = () => {
    return (
        <Container>
            <HomeSection />
        </Container>
    )
}

export default Home
