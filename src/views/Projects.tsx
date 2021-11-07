import {
    AnimatePresence,
    AnimateSharedLayout,
    motion,
    Variants,
} from 'framer-motion'
import React from 'react'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import SectionTitle from '../components/SectionTitle'
import { ProjectItem, projects } from '../projects'

const Container = styled(motion.div)`
    display: flex;
    align-items: center;
    padding-top: 60px;
    min-height: calc(100vh - var(--header-height));
    flex-direction: column;
    gap: 30px;
`

const ProjectContainer = styled(motion.div)`
    background: #fff;
    color: #000;
    padding: 20px;
    border-radius: 20px;
`

const ProjectTitle = styled(motion.div)`
    font-size: 24px;
    font-weight: bold;
`

const ProjectDescription = styled(motion.div)`
    font-size: 16px;
`

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
}

const ProjectCard: React.FC<{
    id: string
    item: ProjectItem
}> = ({ id, item }) => {
    return (
        <Link to={`/projects/${id}`} style={{ textDecoration: 'none' }}>
            <ProjectContainer
                variants={itemVariants}
                layoutId={`projects-${id}`}
            >
                <ProjectTitle layoutId={`project-title-${id}`}>
                    {item.title}
                </ProjectTitle>
                <ProjectDescription layoutId={`project-description-${id}`}>
                    {item.description}
                </ProjectDescription>
            </ProjectContainer>
        </Link>
    )
}

const Overlay = styled(motion.div)`
    z-index: 100;
    position: fixed;
    will-change: opacity;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 990px;

    a {
        display: block;
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100vw;
        left: 50%;
        background: rgba(0, 0, 0, 0.8);

        transform: translateX(-50%);
    }
`

const DetailsContainer = styled.div`
    z-index: 101;

    width: 100%;
    height: 100%;
    display: block;
    pointer-events: none;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    overflow: hidden;
    padding: 40px 0;
`

const DetailsContent = styled(motion.div)`
    position: relative;
    background: #fff;
    color: #000;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 700px;
    overflow: hidden;
    pointer-events: none;
    padding: 20px;
    border-radius: 20px;
`

const DetailsContentContainer = styled(motion.div)``

const ProjectDetails: React.FC<{ id: string }> = ({ id }) => {
    const item = projects[parseInt(id)]

    return (
        <>
            <Overlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.2, delay: 0.15 }}
                style={{ pointerEvents: 'auto' }}
            >
                <Link to="/projects" />
            </Overlay>
            <DetailsContainer>
                <DetailsContent layoutId={'projects-' + id}>
                    <ProjectTitle layoutId={`project-title-${id}`}>
                        {item.title}
                    </ProjectTitle>
                    <ProjectDescription layoutId={`project-description-${id}`}>
                        {item.description}
                    </ProjectDescription>
                    <DetailsContentContainer
                        initial={{ height: 0 }}
                        animate={{ height: '100%' }}
                        exit={{ height: 0 }}
                        style={{ overflow: 'hidden' }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aliquid, blanditiis consequatur debitis delectus,
                        dignissimos dolore enim eveniet ex fugiat, harum illo
                        illum nam nobis non odit pariatur quas totam veritatis.
                    </DetailsContentContainer>
                </DetailsContent>
            </DetailsContainer>
        </>
    )
}

const ItemsContainer = styled(motion.div)`
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`

const projectsContainerVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.5,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.05,
        },
    },
}

const Projects: React.FC = () => {
    const {
        params: { id },
    } = useRouteMatch<{ id?: string }>()

    const project = projects[parseInt(id!)]

    return (
        <Container>
            <SectionTitle t="Projects" />
            <AnimateSharedLayout type="switch">
                <ItemsContainer
                    variants={projectsContainerVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                >
                    {projects.map((x, i) => (
                        <ProjectCard
                            item={x}
                            key={i.toString()}
                            id={i.toString()}
                        />
                    ))}
                </ItemsContainer>
                <AnimatePresence>
                    {project && <ProjectDetails key={id!} id={id!} />}
                </AnimatePresence>
            </AnimateSharedLayout>
        </Container>
    )
}

export default Projects
