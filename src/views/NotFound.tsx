import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'
import { motion } from 'framer-motion'

const Container = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 50px;
    flex-direction: column;
    gap: 20px;
`

const Title = styled.div`
    font-size: 50px;
    font-weight: bold;
`

const Description = styled.div`
    font-size: 30px;
`

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
}

const NotFound: React.FC = () => {
    return (
        <Container
            as={motion.div}
            animate="show"
            initial="hidden"
            exit="exit"
            variants={container}
        >
            <Title as={motion.div} variants={item}>
                Page Not Found
            </Title>
            <Description as={motion.div} variants={item}>
                에에...페이지가 없네요오
            </Description>
            <motion.div variants={item}>
                <Button as={Link} to="/">
                    홈으로 가기
                </Button>
            </motion.div>
        </Container>
    )
}

export default NotFound
