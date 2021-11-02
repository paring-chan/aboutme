import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../components/SectionTitle'

const Container = styled(motion.div)`
    display: flex;
    align-items: center;
    padding-top: 60px;
    min-height: calc(100vh - var(--header-height));
    flex-direction: column;
    gap: 30px;
`

const Projects: React.FC = () => {
    return (
        <Container>
            <SectionTitle t="Projects" />
        </Container>
    )
}

export default Projects
