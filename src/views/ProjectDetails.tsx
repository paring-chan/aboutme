import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../projects'
import { useRouteMatch } from 'react-router-dom'
import NotFound from './NotFound'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled(motion.div)`
    display: flex;
    align-items: center;
    padding-top: 60px;
    min-height: calc(100vh - var(--header-height));
    flex-direction: column;
    gap: 20px;
`

const ProjectBrief = styled(motion.div)`
    font-size: 24px;
`

const ProjectDetails: React.FC = () => {
    const {
        params: { id },
    } = useRouteMatch<{ id: string }>()

    const proj = projects[parseInt(id)]

    if (!proj) return <NotFound />

    return (
        <Container>
            <SectionTitle t={proj.title} />
            <ProjectBrief
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 0.5,
                    },
                }}
                exit={{ opacity: 0, y: -20 }}
            >
                {proj.description}
            </ProjectBrief>
        </Container>
    )
}

export default ProjectDetails
