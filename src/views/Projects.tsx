import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Container = styled(motion.div)`
    display: flex;
    align-items: center;
    padding-top: 60px;
    min-height: calc(100vh - var(--header-height));
    flex-direction: column;
    gap: 30px;
`

const Title = styled(motion.div)`
    font-size: 40px;
    font-weight: bold;
`

const Projects: React.FC = () => {
    return (
        <Container>
            <Title
                initial={{
                    y: -20,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                exit={{
                    y: -10,
                    opacity: 0,
                }}
            >
                Skills
            </Title>
        </Container>
    )
}

export default Projects
