import React from 'react'
import styled from 'styled-components'
import HomeSection from './Sections/Home'
import SkillsSection from './Sections/Skills'

const Container = styled.div`
    height: 100%;
`

const Home: React.FC = () => {
    return (
        <Container>
            <HomeSection />
            <SkillsSection />
        </Container>
    )
}

export default Home
