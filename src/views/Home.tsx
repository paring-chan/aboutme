import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Container = styled.div`
    height: calc(100vh - var(--header-height));
    display: flex;
    align-items: center;
    justify-content: center;
`

const SectionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`

const Title = styled.h2`
    font-size: 60px;
`

const Description = styled.h2`
    font-size: 40px;
    text-align: center;
    color: var(--description-white-color);
`

const Home: React.FC = () => {
    return (
        <Container>
            <SectionContainer
                id="home-section-home"
                as={motion.div}
                initial={{
                    opacity: 0,
                    y: -50,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 0.5,
                    type: 'spring',
                }}
                exit={{
                    y: -100,
                    opacity: 0,
                }}
            >
                <Title>파랑이</Title>
                <Description>Full-Stack Developer</Description>
                <Button as={Link} to="/skills">
                    더 알아보기
                </Button>
            </SectionContainer>
        </Container>
    )
}

export default Home
